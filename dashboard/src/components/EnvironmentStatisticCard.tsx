import { Card, Typography } from 'antd';
import { MaterialSymbol } from 'react-material-symbols';
import theme from '../theme';

interface EnvironmentStatisticsCardProps {
  icon: string;
  text: string;
  value: string | number;
}

function EnvironmentStatisticsCard(props: EnvironmentStatisticsCardProps) {
  const { icon, text, value } = props;
  return (
    <Card bodyStyle={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <MaterialSymbol icon={icon} size={24} grade={-25} color={theme.palette.primary6} />
      <Typography style={{ color: theme.palette.primary6, fontSize: '18px' }}>{text}</Typography>
      <Typography style={{ fontSize: '20px', fontWeight: 'bold', marginLeft: 'auto' }}>
        {value} <sup>o</sup>C
      </Typography>
    </Card>
  );
}

export default EnvironmentStatisticsCard;
