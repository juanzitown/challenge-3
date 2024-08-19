import { useDispatch } from 'react-redux';
import { updateFarmer } from '../../features/farmers-slice';
import FarmerType from '../../types/farmer-type';

type UseUpdateFarmerProps = {
  onSuccess?: (data: FarmerType) => void;
  onError?: (error: any) => void;
};

function useUpdateFarmer({ onSuccess, onError }: UseUpdateFarmerProps) {
  const dispatch = useDispatch();

  return {
    fetch: (farmer: FarmerType) => {
      //check for errors here
      if (!farmer?.name) {
        onError?.({ message: 'Name is required' });
        return;
      }

      dispatch(updateFarmer(farmer));
      onSuccess?.(farmer);
    },
    pending: false,
  };
}

export default useUpdateFarmer;
