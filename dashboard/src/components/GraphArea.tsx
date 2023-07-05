import { Col, Row } from 'antd/es/grid';
import { Button, Menu, MenuProps, Typography } from 'antd';
import { MaterialSymbol } from 'react-material-symbols';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import theme from '../theme';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { isEqual, range } from 'lodash-es';
import { Data } from '../data';

interface GraphAreaProps {
  data: Data[];
}

function GraphArea(props: GraphAreaProps) {
  const { data } = props;
  const { Title, Text } = Typography;

  const items: MenuProps['items'] = [
    {
      label: 'Monthly',
      key: 'monthly',
    },
    { type: 'divider' },
    {
      label: 'Weekly',
      key: 'weekly',
    },
    { type: 'divider' },
    {
      label: 'Daily',
      key: 'daily',
    },
  ];

  const onMenuClick: MenuProps['onClick'] = (e) => {
    if (e.key === 'farms') {
      console.log('farms clicked');
    }
  };

  const maximumTimelineSize = 16;
  const [offsetRange, setOffsetRange] = useState<number[]>([]);
  const [currentTimelineSize, setCurrentTimelineSize] = useState<number>(maximumTimelineSize);
  const [currentDataIndex, setCurrentDataIndex] = useState<number>(data.length - 1);

  const getCurrentTimeline = () =>
    data.slice(Math.max(0, currentDataIndex - (maximumTimelineSize - 1)), currentDataIndex + 1);

  const onTimelineLeft = () => {
    if (currentDataIndex <= 1) {
      return;
    }
    setCurrentDataIndex(currentDataIndex - 1);
  };

  const onTimelineRight = () => {
    if (currentDataIndex >= data.length - 1) {
      return;
    }
    setCurrentDataIndex(currentDataIndex + 1);
  };

  const onTimelineClick = (index: number) => {
    setCurrentDataIndex(currentDataIndex - (currentTimelineSize - 1 - index));
  };

  useEffect(() => {
    setCurrentTimelineSize(getCurrentTimeline().length);
  }, [currentDataIndex]);

  return (
    <>
      <Row align={'middle'} style={{ backgroundColor: theme.palette.primary1, height: 48 }}>
        <Col span={4} style={{ display: 'flex', justifyContent: 'end', paddingRight: 32 }}>
          <Button onClick={onTimelineLeft}>
            <MaterialSymbol icon='chevron_left' size={24} grade={-25} />
          </Button>
        </Col>
        <Col span={16} style={{ height: '100%' }}>
          {offsetRange.map((offset, index) => (
            <Button
              key={offset}
              type={index === offsetRange.length - 1 ? 'primary' : 'text'}
              style={{
                position: 'absolute',
                left: offset,
                top: 8,
                transform: 'translateX(-50%)',
                padding: 4,
              }}
              onClick={() => onTimelineClick(index)}
            >
              {getCurrentTimeline()[index] &&
                dayjs(getCurrentTimeline()[index].date).format('MMMDD')}
            </Button>
          ))}
        </Col>
        <Col span={4} style={{ paddingLeft: 32 }}>
          <Button onClick={onTimelineRight}>
            <MaterialSymbol icon='chevron_right' size={24} grade={-25} />
          </Button>
        </Col>
      </Row>
      <Row style={{ height: 'calc(100% - 48px)', overflow: 'auto' }}>
        <Col span={24}>
          {Object.keys(data[0])
            .filter((key) => key !== 'date')
            .map((metric) => (
              <Row key={metric} align={'middle'}>
                <Col
                  span={4}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'end',
                    gap: '8px',
                    paddingRight: 24,
                  }}
                >
                  <Title level={4} style={{ margin: 0 }}>
                    Avg. {metric.charAt(0).toUpperCase() + metric.slice(1)}
                  </Title>
                  <MaterialSymbol icon='fullscreen' size={32} grade={-25} />
                </Col>
                <Col span={16}>
                  <ResponsiveContainer
                    width='100%'
                    height={80}
                    // onResize={(width) => {
                    //   if (!currentBuilding) {
                    //     return;
                    //   }
                    //   setOffsetRange(
                    //     range(5, width - 10 + 5 + 1, (width - 10) / (getCurrentTimeline().length - 1)),
                    //   );
                    // }}
                  >
                    <LineChart data={getCurrentTimeline()}>
                      <CartesianGrid
                        strokeDasharray='3 3'
                        horizontal={false}
                        verticalCoordinatesGenerator={(graphDetails) => {
                          const range1 = range(
                            graphDetails.xAxis.x,
                            graphDetails.xAxis.width + graphDetails.xAxis.x + 1,
                            graphDetails.xAxis.width / (graphDetails.xAxis.domain.length - 1),
                          );

                          if (!isEqual(range1, offsetRange)) {
                            setOffsetRange(range1);
                          }

                          return range1;
                        }}
                      />
                      <XAxis dataKey='date' hide={true} />
                      <YAxis domain={['dataMin', 'dataMax']} hide={true} />
                      <Tooltip />
                      <Line
                        type='monotone'
                        dataKey={metric}
                        stroke={theme.palette.pumpkin4}
                        isAnimationActive={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Col>
                <Col
                  span={4}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'start',
                    gap: '8px',
                    paddingLeft: 24,
                  }}
                >
                  <Text style={{ margin: 0, fontSize: 20, color: theme.palette.primary6 }}>
                    {getCurrentTimeline()[currentTimelineSize - 1] &&
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      getCurrentTimeline()[currentTimelineSize - 1][metric].toString()}{' '}
                    mm^3
                  </Text>
                </Col>
              </Row>
            ))}
        </Col>
        <Menu
          theme='light'
          mode='vertical'
          selectable={true}
          selectedKeys={['weekly']}
          onClick={onMenuClick}
          items={items}
          style={{
            position: 'absolute',
            bottom: 32,
            right: 32,
            borderInlineEnd: 0,
            border: '1px solid',
          }}
        />
      </Row>
    </>
  );
}

export default GraphArea;
