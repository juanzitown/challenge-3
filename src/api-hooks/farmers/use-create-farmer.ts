import { useDispatch } from 'react-redux';
import { newFarmer } from '../../features/farmers-slice';
import FarmerType from '../../types/farmer-type';

type UseCreateFarmerProps = {
  onSuccess?: (data: FarmerType) => void;
  onError?: (error: any) => void;
};

function useCreateFarmer({ onSuccess, onError }: UseCreateFarmerProps) {
  const dispatch = useDispatch();

  return {
    fetch: (farmer: FarmerType) => {
      //check for errors here
      if (!farmer?.name) {
        onError?.({ message: 'Name is required' });
        return;
      }

      dispatch(newFarmer(farmer));
      onSuccess?.(farmer);
    },
    pending: false,
  };
}

export default useCreateFarmer;
