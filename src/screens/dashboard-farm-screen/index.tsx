import PrivateLayout from '../../components/private-layout';
import FarmableVersusVegetationBoard from './farmable-versus-vegetation-board';
import TotalAreaSizeBoard from './total-area-size-board';
import TotalByCropBoard from './total-by-crop-board';
import TotalFarmsBoard from './total-farms-board';
import TotalFarmsByStateBoard from './total-farms-by-state-board';

function DashboardFarmScreen() {
  return (
    <PrivateLayout>
      <div className="flex flex-col pt-4 pb-16 gap-6">
        <div className="flex flex-row items-center justify-center flex-wrap gap-4">
          <TotalFarmsBoard />
          <TotalAreaSizeBoard />
        </div>
        <div className="flex flex-row items-center justify-center flex-wrap gap-4">
          <FarmableVersusVegetationBoard />
          <TotalByCropBoard />
        </div>
        <div className="flex flex-row items-center justify-center flex-wrap gap-4">
          <TotalFarmsByStateBoard />
        </div>
      </div>
    </PrivateLayout>
  );
}

export default DashboardFarmScreen;
