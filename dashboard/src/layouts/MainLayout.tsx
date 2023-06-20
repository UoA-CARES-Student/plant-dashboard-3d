import Layout, { Content, Header } from 'antd/es/layout/layout';
import { Outlet, useNavigate } from 'react-router-dom';
import theme from '../theme';
import Menu, { MenuProps } from 'antd/es/menu/menu';
import profileImage from '../assets/profile.svg';

function MainLayout() {
  const navigate = useNavigate();

  const items: MenuProps['items'] = [
    {
      label: 'Farms',
      key: 'farms',
    },
    {
      label: 'Buildings',
      key: 'buildings',
      children: [
        {
          type: 'group',
          label: 'Farm 1',
          children: [
            {
              label: 'Building 1',
              key: 'building1',
            },
            {
              label: 'Building 2',
              key: 'building2',
            },
            {
              label: 'Building 3',
              key: 'building3',
            },
            {
              label: 'Building 4',
              key: 'building4',
            },
          ],
        },
        {
          type: 'group',
          label: 'Farm 2',
          children: [
            {
              label: 'Main Greenhouse',
              key: 'maingreenhouse',
            },
          ],
        },
      ],
    },
  ];

  const onMenuClick: MenuProps['onClick'] = (e) => {
    console.log('click: ', e.key);
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
        <img src='/logo.svg' alt='logo' />
        <Menu
          theme='light'
          mode='horizontal'
          selectable={false}
          onClick={onMenuClick}
          items={items}
          style={{
            minWidth: 0,
            maxWidth: 300,
            flex: 'auto',
            justifyContent: 'center',
            background: theme.palette.primary1,
          }}
        />
        <img src={profileImage} alt='logo' />
      </Header>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
}

export default MainLayout;
