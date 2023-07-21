import { Card, Col, Row, Typography } from 'antd';
import { MaterialSymbol } from 'react-material-symbols';
import dayjs from 'dayjs';
import theme from '../theme';

interface EventCardProps {
  date: string;
  text: string;
}

function EventCard(props: EventCardProps) {
  const { date, text } = props;
  return (
    <Card bodyStyle={{ padding: 16, maxWidth: 260 }} style={{ flexShrink: 0 }}>
      <Row gutter={12} justify={'space-between'}>
        <Col>
          <MaterialSymbol
            icon='priority_high'
            size={24}
            grade={-25}
            color={theme.palette.pumpkin6}
          />
        </Col>
        <Col>
          <Typography>{dayjs(date).format('MMM DD YYYY')}</Typography>
        </Col>
      </Row>
      <Row gutter={12}>
        <Col>
          <Typography>{text}</Typography>
        </Col>
      </Row>
    </Card>
  );
}

export default EventCard;
