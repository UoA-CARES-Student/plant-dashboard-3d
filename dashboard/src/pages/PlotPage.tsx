import { Link, useNavigate, useParams } from 'react-router-dom';
import PlotAOneClickableSvg from '../svg-components/plotAOneClickableSvg';
import ZoomableComponent from '../components/ZoomableComponent';
import { Col, Row } from 'antd/es/grid';
import theme from '../theme';
import CentreErrorCard from '../components/CentreErrorCard';
import farms, { Building, Plot } from '../data';
import GraphArea from '../components/GraphArea';
import { Breadcrumb } from 'antd';
import { useState } from 'react';
import EnvironmentArea from '../components/EnvironmentArea';

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

  if (!currentPlot || parseInt(plotId) !== 0) {
    return <CentreErrorCard text='Number is not a valid id' />;
  }

  const [currentDate, setCurrentDate] = useState<string>();

  return (
    <>
      <Row style={{ height: 'calc(50vh - 64px)' }}>
        <Col span={12} style={{ padding: '8px 16px' }}>
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
          <EnvironmentArea
            environmentData={currentBuilding?.environment.find((env) => env.date === currentDate)}
          />
        </Col>

        <Col span={12} style={{ height: '100%', background: theme.palette.bole1 }}>
          <ZoomableComponent>
            <PlotAOneClickableSvg onClickPlant={(id: number) => navigate(`/plant/${id}`)} />
          </ZoomableComponent>
        </Col>
      </Row>
      <GraphArea
        data={currentPlot.data}
        onDateChanged={(newDate: string) => setCurrentDate(newDate)}
      />
    </>
  );
}

export default PlotPage;
