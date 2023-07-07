import { useNavigate, useParams } from 'react-router-dom';
import PlotAOneClickableSvg from '../svg-components/plotAOneClickableSvg';
import ZoomableComponent from '../components/ZoomableComponent';
import { Col, Row } from 'antd/es/grid';
import theme from '../theme';
import CentreErrorCard from '../components/CentreErrorCard';
import farms, { Plot } from '../data';

function PlotPage() {
  const navigate = useNavigate();

  const { plotId } = useParams();

  if (!plotId || isNaN(parseInt(plotId))) {
    return <CentreErrorCard text='Id is not a valid number' />;
  }

  let currentPlot: undefined | Plot = undefined;
  for (const farm of farms) {
    for (const building of farm.buildings) {
      const plot = building.plots.find((plot) => plot.id === parseInt(plotId));
      if (plot) {
        currentPlot = plot;
        break;
      }
    }
  }

  if (!currentPlot || parseInt(plotId) !== 0) {
    return <CentreErrorCard text='Number is not a valid id' />;
  }

  return (
    <>
      <Row style={{ height: 'calc(50vh - 64px)' }}>
        <Col span={12}></Col>

        <Col span={12} style={{ height: '100%', background: theme.palette.bole1 }}>
          <ZoomableComponent>
            <PlotAOneClickableSvg onClickPlant={(id: number) => navigate(`/plant/${id}`)} />
          </ZoomableComponent>
        </Col>
      </Row>
      <Row style={{ height: '50vh' }}>
        <Col span={24}></Col>
      </Row>
    </>
  );
}

export default PlotPage;
