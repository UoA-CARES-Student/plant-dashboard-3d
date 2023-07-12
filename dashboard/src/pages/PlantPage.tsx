import { Link, useParams } from 'react-router-dom';
import CentreErrorCard from '../components/CentreErrorCard';
import farms, { Building, Plant, Plot } from '../data.ts';
import { Breadcrumb, Col, Row } from 'antd';
import ZoomableComponent from '../components/ZoomableComponent.tsx';
import theme from '../theme.ts';
import samplePlant from '../assets/sample-plant.jpg';
import GraphArea from '../components/GraphArea.tsx';

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

  if (!currentPlant || parseInt(plantId) !== 0) {
    return <CentreErrorCard text='Number is not a valid id' />;
  }

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
                    title: <Link to={`/plot/${currentPlot?.id}`}>{currentPlot?.plotName}</Link>,
                  },
                  {
                    title: currentPlant.plantName,
                  },
                ]}
              />
            </Col>
          </Row>
        </Col>

        <Col span={12} style={{ height: '100%', background: theme.palette.bole1 }}>
          <ZoomableComponent>
            <img src={samplePlant} alt='plant' style={{ width: '100%' }} />
          </ZoomableComponent>
        </Col>
      </Row>
      <GraphArea data={currentPlant.data} />
    </>
  );
}

export default PlantPage;
