import { Col, Row } from 'antd/es/grid';
import { Button, Space, Typography } from 'antd';
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
import { chunk, groupBy, isEqual, range } from 'lodash-es';
import { Data } from '../data';

interface GraphAreaProps {
  data: Data[];
}

function GraphArea(props: GraphAreaProps) {
  const { data } = props;
  const { Title, Text } = Typography;

  const dailyData = data;
  const weeklyData = chunk(data, 7).map((weekArr) => {
    const weekTotals = weekArr.reduce(
      (acc, value) => ({
        date: acc.date ? acc.date : value.date,
        volume: acc.volume + value.volume,
        area: acc.area + value.area,
        fruitlets: acc.fruitlets + value.fruitlets,
        leaves: acc.leaves + value.leaves,
        height: acc.height + value.height,
        width: acc.width + value.width,
      }),
      { date: '', volume: 0, area: 0, fruitlets: 0, leaves: 0, height: 0, width: 0 },
    );
    return {
      date: weekTotals.date,
      volume: (weekTotals.volume / weekArr.length).toFixed(2),
      area: (weekTotals.area / weekArr.length).toFixed(2),
      fruitlets: (weekTotals.fruitlets / weekArr.length).toFixed(2),
      leaves: (weekTotals.leaves / weekArr.length).toFixed(2),
      height: (weekTotals.height / weekArr.length).toFixed(2),
      width: (weekTotals.width / weekArr.length).toFixed(2),
    };
  });
  const monthlyData = Object.values(groupBy(data, (day) => dayjs(day.date).format('MM-YYYY'))).map(
    (monthObj) => {
      const monthTotals = monthObj.reduce(
        (acc, value) => ({
          date: acc.date ? acc.date : value.date,
          volume: acc.volume + value.volume,
          area: acc.area + value.area,
          fruitlets: acc.fruitlets + value.fruitlets,
          leaves: acc.leaves + value.leaves,
          height: acc.height + value.height,
          width: acc.width + value.width,
        }),
        { date: '', volume: 0, area: 0, fruitlets: 0, leaves: 0, height: 0, width: 0 },
      );
      return {
        date: monthTotals.date,
        volume: (monthTotals.volume / monthObj.length).toFixed(2),
        area: (monthTotals.area / monthObj.length).toFixed(2),
        fruitlets: (monthTotals.fruitlets / monthObj.length).toFixed(2),
        leaves: (monthTotals.leaves / monthObj.length).toFixed(2),
        height: (monthTotals.height / monthObj.length).toFixed(2),
        width: (monthTotals.width / monthObj.length).toFixed(2),
      };
    },
  );

  const units = {
    volume: (
      <>
        mm<sup>3</sup>
      </>
    ),
    area: (
      <>
        mm<sup>2</sup>
      </>
    ),
    fruitlets: <></>,
    leaves: <></>,
    height: <>mm</>,
    width: <>mm</>,
  };

  const maximumTimelineSize = 16;
  const [offsetRange, setOffsetRange] = useState<number[]>([]);
  const [currentTimelineSize, setCurrentTimelineSize] = useState<number>(maximumTimelineSize);
  const [currentDataIndex, setCurrentDataIndex] = useState<number>(dailyData.length - 1);

  const [timescale, setTimescale] = useState<string>('daily');

  const getCurrentTimeline = () => {
    if (timescale === 'monthly') {
      return monthlyData.slice(
        Math.max(0, currentDataIndex - (maximumTimelineSize - 1)),
        currentDataIndex + 1,
      );
    } else if (timescale === 'weekly') {
      return weeklyData.slice(
        Math.max(0, currentDataIndex - (maximumTimelineSize - 1)),
        currentDataIndex + 1,
      );
    } else {
      return dailyData.slice(
        Math.max(0, currentDataIndex - (maximumTimelineSize - 1)),
        currentDataIndex + 1,
      );
    }
  };
  const onTimelineLeft = () => {
    if (currentDataIndex <= 1) {
      return;
    }
    setCurrentDataIndex(currentDataIndex - 1);
  };

  const onTimelineRight = () => {
    if (timescale === 'monthly' && currentDataIndex >= monthlyData.length - 1) {
      return;
    } else if (timescale === 'weekly' && currentDataIndex >= weeklyData.length - 1) {
      return;
    } else if (timescale === 'daily' && currentDataIndex >= dailyData.length - 1) {
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

  const onTimescaleChange = (timescale: string) => {
    setTimescale(timescale);
    if (timescale === 'monthly') {
      setCurrentDataIndex(monthlyData.length - 1);
    } else if (timescale === 'weekly') {
      setCurrentDataIndex(weeklyData.length - 1);
    } else {
      setCurrentDataIndex(dailyData.length - 1);
    }
  };

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
                dayjs(getCurrentTimeline()[index].date).format('MMM DD')}
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
                    {
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      units[metric]
                    }
                  </Text>
                </Col>
              </Row>
            ))}
        </Col>
        <Space.Compact
          direction='vertical'
          size='large'
          style={{
            position: 'absolute',
            bottom: 32,
            right: 32,
          }}
        >
          <Button
            type={timescale === 'daily' ? 'primary' : 'default'}
            onClick={() => onTimescaleChange('daily')}
          >
            Daily
          </Button>
          <Button
            type={timescale === 'weekly' ? 'primary' : 'default'}
            onClick={() => onTimescaleChange('weekly')}
          >
            Weekly
          </Button>
          <Button
            type={timescale === 'monthly' ? 'primary' : 'default'}
            onClick={() => onTimescaleChange('monthly')}
          >
            Monthly
          </Button>
        </Space.Compact>
      </Row>
    </>
  );
}

export default GraphArea;
