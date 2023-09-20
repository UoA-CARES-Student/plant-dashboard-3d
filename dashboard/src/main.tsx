import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.scss';
import RootLayout from './layouts/RootLayout';
import MainLayout from './layouts/MainLayout';
import FarmsPage from './pages/FarmsPage';
import BuildingPage from './pages/BuildingPage';
import PlotPage from './pages/PlotPage';
import PlantPage from './pages/PlantPage';
import { ConfigProvider } from 'antd';
import '@fontsource/plus-jakarta-sans';
import 'react-material-symbols/dist/outlined.css';
import { randomiseData } from './mock-data-generation/dataRandomiser';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <MainLayout />,
        children: [
          {
            path: '',
            element: <FarmsPage />,
          },
          {
            path: 'building/:buildingId',
            element: <BuildingPage />,
          },
          {
            path: 'plot/:plotId',
            element: <PlotPage />,
          },
          {
            path: 'plant/:plantId',
            element: <PlantPage />,
          },
        ],
      },
    ],
  },
]);

randomiseData();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#6B9080',
        colorTextBase: '#040303',
        fontFamily:
          // eslint-disable-next-line quotes
          "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",

        colorBgLayout: '#fff',
      },
    }}
  >
    <RouterProvider router={router} />
  </ConfigProvider>,
);
