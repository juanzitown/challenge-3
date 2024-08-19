import React from 'react';
import Button from '../../components/button';
import useFarmer from '../../api-hooks/farmer/use-farmer';
import PrivateLayout from '../../components/private-layout';

function ListFarmerScreen() {
  const farmers = useFarmer()
  return (
    <PrivateLayout>
      <div className='flex flex-row justify-between items-center'>
      <h1 className='font-semibold text-2xl'>Farmers</h1>
        <Button>New Farmer</Button>
      </div>

        {farmers?.map?.(farmer => {
          return <div className='text-sm' key={farmer}>{farmer}</div>
        })}
    </PrivateLayout>
  );
}

export default ListFarmerScreen;
