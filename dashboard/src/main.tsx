import React from 'react';
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
            path: 'building',
            element: <BuildingPage />,
          },
          {
            path: 'plot',
            element: <PlotPage />,
          },
          {
            path: 'plant',
            element: <PlantPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
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
    </ConfigProvider>
  </React.StrictMode>,
);
