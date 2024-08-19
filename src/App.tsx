import React from 'react';
import CreateFarmerScreen from './screens/create-farmer-screen';
import ListFarmerScreen from './screens/list-farmer-screen';
import DashboardFarmerScreen from './screens/dashboard-farmer-screen';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardFarmerScreen />
  },
  {
    path: "/farmer",
    element: <ListFarmerScreen />
  },
  {
    path: "/farmer/new",
    element: <CreateFarmerScreen />
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
