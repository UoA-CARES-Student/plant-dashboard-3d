import Col from 'antd/es/col';
import Row from 'antd/es/row';
import { useNavigate } from 'react-router-dom';
import FarmOneClickableSvg from '../svg-components/farmOneClickableSvg';
import FarmTwoClickableSvg from '../svg-components/farmTwoClickableSvg';

function FarmsPage() {
  const navigate = useNavigate();

  const onBuildingClick = (id: number) => navigate(`/building/${id}`);

  return (
    <Row gutter={8} justify={'center'} style={{ height: '100%' }}>
      <Col style={{ width: '42.63%' }}>
        <FarmOneClickableSvg onBuildingClick={onBuildingClick} />
      </Col>
      <Col style={{ width: '57.32%' }}>
        <FarmTwoClickableSvg onBuildingClick={onBuildingClick} />
      </Col>
    </Row>
  );
}

export default FarmsPage;
