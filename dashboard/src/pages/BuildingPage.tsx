import Col from 'antd/es/col';
import Row from 'antd/es/row';
import { useNavigate, useParams } from 'react-router-dom';
import BuildingOneClickableSvg from '../svg-components/buildingOneClickableSvg';
import theme from '../theme';
import ZoomableComponent from '../components/ZoomableComponent';

function BuildingPage() {
  const navigate = useNavigate();
  const { buildingId } = useParams();

  return buildingId && parseInt(buildingId) !== 0 ? (
    <div>Error</div>
  ) : (
    <Row style={{ height: 'calc(50vh - 64px)' }}>
      <Col span={12}></Col>

      <Col span={12} style={{ height: '100%', background: theme.palette.bole1 }}>
        <ZoomableComponent>
          <BuildingOneClickableSvg onClickPlot={(id: number) => navigate(`/plot/${id}`)} />
        </ZoomableComponent>
      </Col>
    </Row>
  );
}

export default BuildingPage;
