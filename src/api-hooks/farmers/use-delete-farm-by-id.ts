import { useDispatch } from 'react-redux';
import { deleteFarm } from '../../features/farms-slice';
import FarmType from '../../types/farm-type';

type UseDeleteFarmByIdProps = {
  onSuccess?: () => void;
  onError?: (error: any) => void;
};

function useDeleteFarmById({ onSuccess, onError }: UseDeleteFarmByIdProps) {
  const dispatch = useDispatch();

  return {
    fetch: (id: FarmType['id']) => {
      dispatch(deleteFarm(id));
      onSuccess?.();
    },
    pending: false,
  };
}

export default useDeleteFarmById;
