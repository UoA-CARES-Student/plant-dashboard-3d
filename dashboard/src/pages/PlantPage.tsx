import { useParams } from 'react-router-dom';
import CentreErrorCard from '../components/CentreErrorCard';
import farms, { Plant } from '../data.ts';

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

  return <div>PlantPage {plantId}</div>;
}

export default PlantPage;
