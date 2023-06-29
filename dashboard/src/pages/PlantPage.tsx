import { useParams } from 'react-router-dom';

function PlantPage() {
  const { plantId } = useParams();
  return <div>PlantPage {plantId}</div>;
}

export default PlantPage;
