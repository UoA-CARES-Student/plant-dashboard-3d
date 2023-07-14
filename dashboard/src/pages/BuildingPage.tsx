import Col from 'antd/es/col';
import Row from 'antd/es/row';
import { Link, useNavigate, useParams } from 'react-router-dom';
import BuildingOneClickableSvg from '../svg-components/buildingOneClickableSvg';
import theme from '../theme';
import ZoomableComponent from '../components/ZoomableComponent';
import farms, { Building } from '../data.ts';
import CentreErrorCard from '../components/CentreErrorCard.tsx';
import GraphArea from '../components/GraphArea.tsx';
import { Breadcrumb } from 'antd';
import EnvironmentArea from '../components/EnvironmentArea.tsx';
import { useState } from 'react';

function BuildingPage() {
  const navigate = useNavigate();
  const { buildingId } = useParams();

  if (!buildingId || isNaN(parseInt(buildingId))) {
    return <CentreErrorCard text='Id is not a valid number' />;
  }

  let currentBuilding: undefined | Building = undefined;
  for (const farm of farms) {
    const buliding = farm.buildings.find((building) => building.id === parseInt(buildingId));
    if (buliding) {
      currentBuilding = buliding;
      break;
    }
  }

  if (!currentBuilding || parseInt(buildingId) !== 0) {
    return <CentreErrorCard text='Number is not a valid id' />;
  }

  const [currentDate, setCurrentDate] = useState<string>();

  return (
    <>
      <Row style={{ height: 'calc(50vh - 64px)' }}>
        <Col span={12} style={{ padding: '8px 16px' }}>
          <Row>
            <Col span={24}>
              <Breadcrumb
                items={[
                  {
                    title: <Link to='/'>Farms</Link>,
                  },
                  {
                    title: currentBuilding.buildingName,
                  },
                ]}
              />
            </Col>
          </Row>
          <EnvironmentArea
            currentEnvironmentData={currentBuilding.environment.find(
              (env) => env.date === currentDate,
            )}
            allEnvironmentData={currentBuilding.environment.slice(
              Math.max(
                0,
                currentBuilding.environment.findIndex((env) => env.date === currentDate) + 1 - 16,
              ),
              currentBuilding.environment.findIndex((env) => env.date === currentDate) + 1,
            )}
          />
        </Col>

        <Col span={12} style={{ height: '100%', background: theme.palette.bole1 }}>
          <ZoomableComponent>
            <BuildingOneClickableSvg onClickPlot={(id: number) => navigate(`/plot/${id}`)} />
          </ZoomableComponent>
        </Col>
      </Row>
      <GraphArea
        data={currentBuilding.data}
        onDateChanged={(newDate: string) => setCurrentDate(newDate)}
      />
    </>
  );
}

export default BuildingPage;
