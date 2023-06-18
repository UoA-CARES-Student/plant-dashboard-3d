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
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>,
);
