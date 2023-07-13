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
              value={
                <>
                  {environmentData?.temperature ?? 0} <sup>o</sup>C
                </>
              }
            />
          </Col>
          <Col span={12}>
            <EnvironmentStatisticsCard
              icon='fluorescent'
              text='Fluorescents'
              value={<>{environmentData?.fluorescents ?? 0} fc</>}
            />
          </Col>
          <Col span={12}>
            <EnvironmentStatisticsCard
              icon='blur_on'
              text='CO2 Conc.'
              value={<>{environmentData?.co2Concentration ?? 0} ppm</>}
            />
          </Col>
          <Col span={12}>
            <EnvironmentStatisticsCard
              icon='humidity_high'
              text='Irrigation'
              value={
                <>
                  {environmentData?.irrigation ?? 0} m<sup>3</sup>/s
                </>
              }
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default EnvironmentArea;
