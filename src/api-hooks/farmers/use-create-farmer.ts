import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newFarmer } from '../../features/farmers-slice';
import FarmerType from '../../types/farmer-type';

function useCreateFarmer() {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();

  return {
    fetch: (farmer: FarmerType) => {
      setPending(true);
      //fake pending with timeouts
      setTimeout(() => {
        dispatch(newFarmer(farmer));
        setPending(false);
      }, 2000);
    },
    pending,
  };
}

export default useCreateFarmer;
