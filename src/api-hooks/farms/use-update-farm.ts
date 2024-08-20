import { useDispatch } from 'react-redux';
import { updateFarm } from '../../features/farms-slice';
import FarmType from '../../types/farm-type';

type UseUpdateFarmProps = {
  onSuccess?: (data: FarmType) => void;
  onError?: (error: any) => void;
};

function useUpdateFarm({ onSuccess, onError }: UseUpdateFarmProps) {
  const dispatch = useDispatch();

  return {
    fetch: (farm: FarmType) => {
      //check for errors here
      if (!farm?.name) {
        onError?.({ message: 'Name is required' });
        return;
      }

      dispatch(updateFarm(farm));
      onSuccess?.(farm);
    },
    pending: false,
  };
}

export default useUpdateFarm;
