import DashboardFarmScreen from './screens/dashboard-farm-screen';
import FarmFormScreen from './screens/farm-form-screen';
import ListFarmScreen from './screens/list-farm-screen';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardFarmScreen />,
  },
  {
    path: '/farms',
    element: <ListFarmScreen />,
  },
  {
    path: '/farms/new',
    element: <FarmFormScreen />,
  },

  {
    path: '/farms/:id',
    element: <FarmFormScreen />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
