import MultiSelectCrops from '../../components/multi-select-crops';
import PieChart from '../../components/pie-chart';
import PrivateLayout from '../../components/private-layout';

function DashboardFarmScreen() {
  return (
    <PrivateLayout>
      <div>
        <div className="p-4 text-2xl bg-slate-500">
          This is the Dashboard Farm Screen
        </div>
        <PieChart />
        <label>Multiselect</label>
        <MultiSelectCrops />
      </div>
    </PrivateLayout>
  );
}

export default DashboardFarmScreen;
