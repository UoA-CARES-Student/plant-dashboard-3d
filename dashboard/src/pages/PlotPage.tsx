import { useNavigate, useParams } from 'react-router-dom';
import PlotAOneClickableSvg from '../svg-components/plotAOneClickableSvg';
import ZoomableComponent from '../components/ZoomableComponent';
import { Col, Row } from 'antd/es/grid';
import theme from '../theme';

function PlotPage() {
  const navigate = useNavigate();
  const { plotId } = useParams();

  return plotId && parseInt(plotId) !== 0 ? (
    <div>Error</div>
  ) : (
    <Row style={{ height: 'calc(50vh - 64px)' }}>
      <Col span={12}></Col>

      <Col span={12} style={{ height: '100%', background: theme.palette.bole1 }}>
        <ZoomableComponent>
          <PlotAOneClickableSvg onClickPlant={(id: number) => navigate(`/plant/${id}`)} />
        </ZoomableComponent>
      </Col>
    </Row>
  );
}

export default PlotPage;
