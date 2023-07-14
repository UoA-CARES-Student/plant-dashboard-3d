import { Col, Row, Typography } from 'antd';
import { Environment } from '../data';
import EnvironmentStatisticsCard from './EnvironmentStatisticCard';
import AlertCard from './AlertCard';

interface EnvironmentAreaProps {
  currentEnvironmentData?: Environment;
  allEnvironmentData?: Environment[];
}

function EnvironmentArea(props: EnvironmentAreaProps) {
  const { currentEnvironmentData, allEnvironmentData } = props;
  const { Title } = Typography;

  const icons = {
    temperature: 'device_thermostat',
    fluorescents: 'fluorescent',
    co2Concentration: 'blur_on',
    irrigation: 'humidity_high',
  };

  const alerts: {
    direction: 'up' | 'down';
    text: string;
    icon: string;
    date: string;
  }[] = [];
  if (allEnvironmentData) {
    for (let i = allEnvironmentData.length - 1; i > 0; i--) {
      for (const key of Object.keys(allEnvironmentData[0]) as Array<
        'date' | 'temperature' | 'fluorescents' | 'co2Concentration' | 'irrigation'
      >) {
        if (key === 'date') {
          continue;
        }
        if (allEnvironmentData[i][key] > allEnvironmentData[i - 1][key] * 1.1) {
          alerts.push({
            direction: 'up',
            text: `Rise in ${key}`,
            icon: icons[key],
            date: allEnvironmentData[i].date,
          });
        }
        if (allEnvironmentData[i][key] < allEnvironmentData[i - 1][key] * 0.9) {
          alerts.push({
            direction: 'down',
            text: `Fall in ${key}`,
            icon: icons[key],
            date: allEnvironmentData[i].date,
          });
        }
      }
    }
  }

  const handleScroll = (event: WheelEvent) => {
    const container = event.currentTarget as Element;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: 'auto',
    });
  };

  console.log(allEnvironmentData);
  console.log(alerts);

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
                  {currentEnvironmentData?.temperature ?? 0} <sup>o</sup>C
                </>
              }
            />
          </Col>
          <Col span={12}>
            <EnvironmentStatisticsCard
              icon='fluorescent'
              text='Fluorescents'
              value={<>{currentEnvironmentData?.fluorescents ?? 0} fc</>}
            />
          </Col>
          <Col span={12}>
            <EnvironmentStatisticsCard
              icon='blur_on'
              text='CO2 Conc.'
              value={<>{currentEnvironmentData?.co2Concentration ?? 0} ppm</>}
            />
          </Col>
          <Col span={12}>
            <EnvironmentStatisticsCard
              icon='humidity_high'
              text='Irrigation'
              value={
                <>
                  {currentEnvironmentData?.irrigation ?? 0} m<sup>3</sup>/s
                </>
              }
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Title level={4}>Alerts</Title>
          </Col>
        </Row>
        <Row>
          <Col
            span={24}
            style={{ display: 'flex', gap: 8, overflowX: 'auto' }}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            onWheel={handleScroll}
          >
            {alerts.map((alert) => (
              <AlertCard key={alert.date} {...alert} />
            ))}
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default EnvironmentArea;
