import { Link, useNavigate, useParams } from 'react-router-dom';
import PlotAOneClickableSvg from '../svg-components/plotAOneClickableSvg';
import ZoomableComponent from '../components/ZoomableComponent';
import { Col, Row } from 'antd/es/grid';
import theme from '../theme';
import CentreErrorCard from '../components/CentreErrorCard';
import farms, { Building, Plot } from '../data';
import GraphArea from '../components/GraphArea';
import { Breadcrumb, Typography } from 'antd';
import { useEffect, useState } from 'react';
import EnvironmentArea from '../components/EnvironmentArea';
import dayjs from 'dayjs';
import mixpanel from 'mixpanel-browser';

function PlotPage() {
  const navigate = useNavigate();
  const { plotId } = useParams();

  if (!plotId || isNaN(parseInt(plotId))) {
    return <CentreErrorCard text='Id is not a valid number' />;
  }

  let currentBuilding: undefined | Building = undefined;
  let currentPlot: undefined | Plot = undefined;
  for (const farm of farms) {
    for (const building of farm.buildings) {
      const plot = building.plots.find((plot) => plot.id === parseInt(plotId));
      if (plot) {
        currentBuilding = building;
        currentPlot = plot;
        break;
      }
    }
  }

  if (!currentPlot || parseInt(plotId) !== 2) {
    return <CentreErrorCard text='Number is not a valid id' />;
  }

  useEffect(() => {
    try {
      mixpanel.track_pageview();
    } catch (e) {
      console.warn(e);
    }
  }, []);

  const [currentDateRange, setCurrentDateRange] = useState<{
    startDate: string;
    endDate: string;
  }>();

  return (
    <>
      <Row style={{ height: 'calc(50vh - 64px)' }}>
        <Col span={12} style={{ height: '100%', padding: '8px 16px' }}>
          <Row>
            <Col span={24}>
              <Breadcrumb
                items={[
                  {
                    title: <Link to='/'>Farms</Link>,
                  },
                  {
                    title: (
                      <Link to={`/building/${currentBuilding?.id}`}>
                        {currentBuilding?.buildingName}
                      </Link>
                    ),
                  },
                  {
                    title: currentPlot.plotName,
                  },
                ]}
              />
            </Col>
          </Row>
          <Row
            style={{
              padding: '8px 16px',
              maxHeight: 'calc(100% - 22px)',
              overflowY: 'auto',
              marginTop: 8,
            }}
          >
            <Col span={24}>
              <Row>
                <Col span={24} style={{ display: 'flex', gap: 8 }}>
                  <Typography style={{ fontSize: 20 }}>Estimated Harvest Date:{'  '}</Typography>
                  <Typography style={{ fontSize: 20, color: theme.palette.primary6 }}>
                    {dayjs('2023-08-06').format('MMM DD YYYY')}
                  </Typography>
                </Col>
              </Row>
              <EnvironmentArea
                currentEnvironmentData={currentBuilding?.environment.find(
                  (env) => env.date === currentDateRange?.endDate,
                )}
                allEnvironmentData={currentBuilding?.environment.slice(
                  currentBuilding.environment.findIndex(
                    (env) => env.date === currentDateRange?.startDate,
                  ),
                  currentBuilding.environment.findIndex(
                    (env) => env.date === currentDateRange?.endDate,
                  ) + 1,
                )}
                allEvents={currentBuilding?.events.filter(
                  (event) =>
                    dayjs(event.date).isAfter(
                      dayjs(currentDateRange?.startDate).subtract(1, 'day'),
                    ) && dayjs(event.date).isBefore(dayjs(currentDateRange?.endDate).add(1, 'day')),
                )}
              />
            </Col>
          </Row>
        </Col>

        <Col span={12} style={{ height: '100%', background: theme.palette.bole1 }}>
          <ZoomableComponent>
            <PlotAOneClickableSvg onClickPlant={(id: number) => navigate(`/plant/${id}`)} />
          </ZoomableComponent>
        </Col>
      </Row>
      <GraphArea
        data={currentPlot.data}
        events={currentBuilding?.events ?? []}
        isAverage={true}
        onDateChanged={(newDateRange: { startDate: string; endDate: string }) =>
          setCurrentDateRange(newDateRange)
        }
      />
    </>
  );
}

export default PlotPage;
