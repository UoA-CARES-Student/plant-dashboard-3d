import { useParams } from 'react-router-dom';
import CentreErrorCard from '../components/CentreErrorCard';
import farms, { Plant } from '../data.ts';
import { Col, Row } from 'antd';
import ZoomableComponent from '../components/ZoomableComponent.tsx';
import theme from '../theme.ts';
import samplePlant from '../assets/sample-plant.jpg';
import GraphArea from '../components/GraphArea.tsx';

function PlantPage() {
  const { plantId } = useParams();

  if (!plantId || isNaN(parseInt(plantId))) {
    return <CentreErrorCard text='Id is not a valid number' />;
  }

  let currentPlant: undefined | Plant = undefined;
  for (const farm of farms) {
    for (const building of farm.buildings) {
      for (const plot of building.plots) {
        const plant = plot.plants.find((plant) => plant.id === parseInt(plantId));
        if (plant) {
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
        <Col span={12}></Col>

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
