import { useDispatch } from 'react-redux';
import { deleteFarmer } from '../../features/farmers-slice';
import FarmerType from '../../types/farmer-type';

type UseDeleteFarmerByIdProps = {
  onSuccess?: () => void;
  onError?: (error: any) => void;
};

function useDeleteFarmerById({ onSuccess, onError }: UseDeleteFarmerByIdProps) {
  const dispatch = useDispatch();

  return {
    fetch: (id: FarmerType['id']) => {
      dispatch(deleteFarmer(id));
      onSuccess?.();
    },
    pending: false,
  };
}

export default useDeleteFarmerById;
