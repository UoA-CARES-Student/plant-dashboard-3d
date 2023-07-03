import { Card, Typography } from 'antd';

interface ZoomableComponentProps {
  text: string;
}

function CentreErrorCard(props: ZoomableComponentProps) {
  const { text } = props;
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card title='Error' headStyle={{ textAlign: 'center' }}>
        <Typography>{text}</Typography>
      </Card>
    </div>
  );
}

export default CentreErrorCard;
