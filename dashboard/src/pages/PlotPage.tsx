import { useParams } from 'react-router-dom';

function PlotPage() {
  const { plotId } = useParams();
  return <div>PlotPage {plotId}</div>;
}

export default PlotPage;
