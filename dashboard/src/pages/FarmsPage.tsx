import Col from 'antd/es/col';
import Row from 'antd/es/row';
import { useNavigate } from 'react-router-dom';
import FarmOneClickableSvg from '../svg-components/farmOneClickableSvg';
import FarmTwoClickableSvg from '../svg-components/farmTwoClickableSvg';

function FarmsPage() {
  const navigate = useNavigate();

  const onBuildingClick = (id: number) => navigate(`/building/${id}`);

  return (
    <Row justify={'center'} style={{ height: '100%', gap: '0.6%' }}>
      <Col style={{ width: '42.2%' }}>
        <FarmOneClickableSvg onBuildingClick={onBuildingClick} />
      </Col>
      <Col style={{ width: '57%' }}>
        <FarmTwoClickableSvg onBuildingClick={onBuildingClick} />
      </Col>
    </Row>
  );
}

export default FarmsPage;
