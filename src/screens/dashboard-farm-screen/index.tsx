import PieChart from '../../components/pie-chart';
import PrivateLayout from '../../components/private-layout';
import TotalAreaSizeBoard from './total-area-size-board';
import TotalFarmsBoard from './total-farms-board';

function DashboardFarmScreen() {
  return (
    <PrivateLayout>
      <div className="flex flex-col gap-6">
        <TotalFarmsBoard />
        <TotalAreaSizeBoard />
        <PieChart />
      </div>
    </PrivateLayout>
  );
}

export default DashboardFarmScreen;
