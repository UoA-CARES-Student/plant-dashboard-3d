import { Col, Row, Typography } from 'antd';
import { Environment } from '../data';
import EnvironmentStatisticsCard from './EnvironmentStatisticCard';

interface EnvironmentAreaProps {
  environmentData?: Environment;
}

function EnvironmentArea(props: EnvironmentAreaProps) {
  const { environmentData } = props;
  const { Title } = Typography;
  return (
    <Row style={{ paddingLeft: 16, paddingRight: 16 }}>
      <Col span={24}>
        <Row>
          <Col>
            <Title level={4}>Environment</Title>
          </Col>
        </Row>
        <Row gutter={[8, 8]}>
          <Col span={12}>
            <EnvironmentStatisticsCard
              icon='device_thermostat'
              text='Tempurature'
              value={environmentData?.temperature ?? 0}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default EnvironmentArea;
