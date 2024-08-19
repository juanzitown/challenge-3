import React from 'react';
import FarmerFormScreen from './screens/farmer-form-screen';
import ListFarmerScreen from './screens/list-farmer-screen';
import DashboardFarmerScreen from './screens/dashboard-farmer-screen';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardFarmerScreen />,
  },
  {
    path: '/farmers',
    element: <ListFarmerScreen />,
  },
  {
    path: '/farmers/new',
    element: <FarmerFormScreen />,
  },

  {
    path: '/farmers/:id',
    element: <FarmerFormScreen />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
