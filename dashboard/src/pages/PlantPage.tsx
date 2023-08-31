/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Link, useParams } from 'react-router-dom';
import CentreErrorCard from '../components/CentreErrorCard';
import farms, { Building, Plant, Plot } from '../data.ts';
import { Breadcrumb, Col, Row, Typography } from 'antd';
import ZoomableComponent from '../components/ZoomableComponent.tsx';
import theme from '../theme.ts';
import samplePlant from '../assets/sample-plant.jpg';
import GraphArea from '../components/GraphArea.tsx';
import { useEffect, useState } from 'react';
import EnvironmentArea from '../components/EnvironmentArea.tsx';
import dayjs from 'dayjs';
import mixpanel from 'mixpanel-browser';

function PlantPage() {
  const { plantId } = useParams();

  if (!plantId || isNaN(parseInt(plantId))) {
    return <CentreErrorCard text='Id is not a valid number' />;
  }

  let currentBuilding: undefined | Building = undefined;
  let currentPlot: undefined | Plot = undefined;
  let currentPlant: undefined | Plant = undefined;
  for (const farm of farms) {
    for (const building of farm.buildings) {
      for (const plot of building.plots) {
        const plant = plot.plants.find((plant) => plant.id === parseInt(plantId));
        if (plant) {
          currentBuilding = building;
          currentPlot = plot;
          currentPlant = plant;
          break;
        }
      }
    }
  }

  if (!currentPlant || !currentPlant.data) {
    return <CentreErrorCard text='Number is not a valid id' />;
  }

  const plantDragEventSend = (e: { target: { id: string }; detail: { source: string } }) => {
    if (e.detail.source === 'user-interaction') {
      // @ts-ignore
      document
        .getElementById(e.target.id)
        ?.removeEventListener('camera-change', plantDragEventSend);

      mixpanel.track('Plant Drag', {
        'Plant Number': e.target.id,
      });
    }
  };

  useEffect(() => {
    // @ts-ignore
    document.getElementById('plant-1')?.addEventListener('camera-change', plantDragEventSend);
    // @ts-ignore
    document.getElementById('plant-2')?.addEventListener('camera-change', plantDragEventSend);
    // @ts-ignore
    document.getElementById('plant-3')?.addEventListener('camera-change', plantDragEventSend);
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
                    title: <Link to={`/plot/${currentPlot?.id}`}>{currentPlot?.plotName}</Link>,
                  },
                  {
                    title: currentPlant.plantName,
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
                    {dayjs('2023-08-09').format('MMM DD YYYY')}
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
          {currentPlant.id === 0 ? (
            <ZoomableComponent>
              <img src={samplePlant} alt='plant' style={{ width: '100%' }} />
            </ZoomableComponent>
          ) : currentPlant.id === 1 ? (
            // @ts-ignore
            <model-viewer
              id='plant-2'
              alt='Plant'
              src='/pretty_good_filtered_output.glb'
              shadow-intensity='1'
              camera-controls
              touch-action='pan-y'
              style={{ width: '100%', height: '100%' }}
            />
          ) : (
            // @ts-ignore
            <model-viewer
              id='plant-3'
              alt='Plant'
              src='/tomato_plant.glb'
              shadow-intensity='1'
              camera-controls
              touch-action='pan-y'
              style={{ width: '100%', height: '100%' }}
            />
          )}
        </Col>
      </Row>
      <GraphArea
        data={currentPlant.data}
        events={currentBuilding?.events ?? []}
        isAverage={false}
        onDateChanged={(newDateRange: { startDate: string; endDate: string }) =>
          setCurrentDateRange(newDateRange)
        }
      />
    </>
  );
}

export default PlantPage;
