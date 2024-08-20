import PrivateLayout from '../../components/private-layout';
import TotalAreaSizeBoard from './total-area-size-board';
import TotalByCropBoard from './total-by-crop-board';
import TotalFarmsBoard from './total-farms-board';
import TotalFarmsByStateBoard from './total-farms-by-state-board';

function DashboardFarmScreen() {
  return (
    <PrivateLayout>
      <div className="flex flex-col gap-6">
        <TotalFarmsBoard />
        <TotalAreaSizeBoard />
        <TotalFarmsByStateBoard />
        <TotalByCropBoard />
      </div>
    </PrivateLayout>
  );
}

export default DashboardFarmScreen;
