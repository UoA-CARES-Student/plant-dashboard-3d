import { Card, Col, Row, Typography } from 'antd';
import { MaterialSymbol } from 'react-material-symbols';
import theme from '../theme';
import dayjs from 'dayjs';

interface AlertCardProps {
  direction: 'up' | 'down';
  text: string;
  icon: string;
  date: string;
}

function AlertCard(props: AlertCardProps) {
  const { direction, text, icon, date } = props;
  return (
    <Card bodyStyle={{ padding: 16 }} style={{ flexShrink: 0 }}>
      <Row gutter={12}>
        <Col>
          <MaterialSymbol
            icon={direction === 'up' ? 'trending_up' : 'trending_down'}
            size={24}
            grade={-25}
            color={theme.palette.pumpkin6}
          />
        </Col>
        <Col>
          <Typography>{text}</Typography>
        </Col>
      </Row>
      <Row gutter={12} justify={'space-between'}>
        <Col>
          <MaterialSymbol icon={icon} size={24} grade={-25} color={theme.palette.pumpkin6} />
        </Col>
        <Col>
          <Typography>{dayjs(date).format('MMM DD YYYY')}</Typography>
        </Col>
      </Row>
    </Card>
  );
}

export default AlertCard;
