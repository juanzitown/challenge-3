import React from 'react';
import PieChart from '../../components/pie-chart';
import MultiSelect from '../../components/multi-select';
import Button from '../../components/button';

function DashboardFarmerScreen() {
  return (
    <div>
      <div className='p-4 text-2xl bg-slate-500'>This is the Dashboard Farmer Screen</div>
      <PieChart/>
      <label>Multiselect</label>
      <MultiSelect/>
      <Button label="test" onClick={() => {}} />
    </div>
  );
}

export default DashboardFarmerScreen;
