/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Link, useParams } from 'react-router-dom';
import CentreErrorCard from '../components/CentreErrorCard';
import farms, { Building, Plant, Plot } from '../data.ts';
import { Breadcrumb, Col, Row, Typography } from 'antd';
import theme from '../theme.ts';
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
            <div
              style={{ width: '100%', height: '100%' }}
              onClick={() =>
                mixpanel.track('Plant Drag', {
                  'Plant Number': 'plant-1',
                })
              }
            >
              {
                // @ts-ignore
                <model-viewer
                  id='plant-1'
                  alt='Plant'
                  src='/tomato_plant_1.glb'
                  shadow-intensity='1'
                  camera-controls
                  touch-action='pan-y'
                  style={{ width: '100%', height: '100%' }}
                />
              }
            </div>
          ) : currentPlant.id === 1 ? (
            <div
              style={{ width: '100%', height: '100%' }}
              onClick={() =>
                mixpanel.track('Plant Drag', {
                  'Plant Number': 'plant-2',
                })
              }
            >
              {
                // @ts-ignore
                <model-viewer
                  id='plant-2'
                  alt='Plant'
                  src='/tomato_plant_2.glb'
                  shadow-intensity='1'
                  camera-controls
                  touch-action='pan-y'
                  style={{ width: '100%', height: '100%' }}
                />
              }
            </div>
          ) : (
            <div
              style={{ width: '100%', height: '100%' }}
              onClick={() =>
                mixpanel.track('Plant Drag', {
                  'Plant Number': 'plant-3',
                })
              }
            >
              {
                // @ts-ignore
                <model-viewer
                  id='plant-3'
                  alt='Plant'
                  src='/tomato_plant_3.glb'
                  shadow-intensity='1'
                  camera-controls
                  touch-action='pan-y'
                  style={{ width: '100%', height: '100%' }}
                />
              }
            </div>
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
