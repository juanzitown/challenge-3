import { useDispatch } from 'react-redux';
import { newFarm } from '../../features/farms-slice';
import FarmType from '../../types/farm-type';

type UseCreateFarmProps = {
  onSuccess?: (data: FarmType) => void;
  onError?: (error: any) => void;
};

function useCreateFarm({ onSuccess, onError }: UseCreateFarmProps) {
  const dispatch = useDispatch();

  return {
    fetch: (farm: FarmType) => {
      //check for errors here
      if (!farm?.name) {
        onError?.({ message: 'Name is required' });
        return;
      }

      dispatch(newFarm(farm));
      onSuccess?.(farm);
    },
    pending: false,
  };
}

export default useCreateFarm;
