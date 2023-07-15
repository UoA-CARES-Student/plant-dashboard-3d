import { Card, Typography } from 'antd';
import { MaterialSymbol } from 'react-material-symbols';
import theme from '../theme';

interface EnvironmentStatisticsCardProps {
  icon: string;
  text: string;
  value: string | number | JSX.Element;
}

function EnvironmentStatisticsCard(props: EnvironmentStatisticsCardProps) {
  const { icon, text, value } = props;
  return (
    <Card
      bodyStyle={{ display: 'flex', alignItems: 'center', gap: '8px', height: '100%', padding: 16 }}
      style={{ height: '100%' }}
    >
      <MaterialSymbol icon={icon} size={24} grade={-25} color={theme.palette.primary6} />
      <Typography style={{ color: theme.palette.primary6, fontSize: '18px' }}>{text}</Typography>
      <Typography style={{ fontSize: '20px', fontWeight: 'bold', marginLeft: 'auto' }}>
        {value}
      </Typography>
    </Card>
  );
}

export default EnvironmentStatisticsCard;
