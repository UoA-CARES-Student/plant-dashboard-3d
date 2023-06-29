import Layout, { Content, Header } from 'antd/es/layout/layout';
import { Outlet, useNavigate } from 'react-router-dom';
import theme from '../theme';
import Menu, { MenuProps } from 'antd/es/menu/menu';
import profileImage from '../assets/profile.svg';
import farms from '../data.ts';
import { ItemType } from 'antd/es/menu/hooks/useItems';

function MainLayout() {
  const navigate = useNavigate();

  const buildings: ItemType[] = farms.map((farm) => ({
    type: 'group',
    label: farm.farmName,
    children: farm.buildings.map((building) => ({
      label: building.buildingName,
      key: building.id,
    })),
  }));

  const items: MenuProps['items'] = [
    {
      label: 'Farms',
      key: 'farms',
    },
    {
      label: 'Buildings',
      key: 'buildings',
      children: buildings,
    },
  ];

  const onMenuClick: MenuProps['onClick'] = (e) => {
    if (e.key === 'farms') {
      navigate('/');
    } else {
      navigate(`/building/${e.key}`);
    }
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: theme.palette.primary1,
        }}
      >
        <img
          src='/logo.svg'
          alt='logo'
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/')}
        />
        <Menu
          theme='light'
          mode='horizontal'
          selectable={false}
          onClick={onMenuClick}
          items={items}
          style={{
            minWidth: 0,
            maxWidth: 250,
            flex: 'auto',
            justifyContent: 'center',
            background: theme.palette.primary1,
          }}
        />
        <img
          src={profileImage}
          alt='logo'
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/')}
        />
      </Header>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
}

export default MainLayout;
