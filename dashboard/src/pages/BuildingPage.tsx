import Col from 'antd/es/col';
import Row from 'antd/es/row';
import { useNavigate, useParams } from 'react-router-dom';
import BuildingOneClickableSvg from '../svg-components/buildingOneClickableSvg';

function BuildingPage() {
  const navigate = useNavigate();
  const { buildingId } = useParams();

  return (
    <Row>
      <Col span={16}></Col>
      <Col span={8}>
        <BuildingOneClickableSvg onClickPlot={(id: number) => navigate(`/plot/${id}`)} />
      </Col>
    </Row>
  );
}

export default BuildingPage;
