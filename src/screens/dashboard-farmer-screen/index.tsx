import MultiSelect from '../../components/multi-select';
import PieChart from '../../components/pie-chart';
import PrivateLayout from '../../components/private-layout';

function DashboardFarmerScreen() {
  return (
    <PrivateLayout>
      <div>
        <div className="p-4 text-2xl bg-slate-500">
          This is the Dashboard Farmer Screen
        </div>
        <PieChart />
        <label>Multiselect</label>
        <MultiSelect />
      </div>
    </PrivateLayout>
  );
}

export default DashboardFarmerScreen;
