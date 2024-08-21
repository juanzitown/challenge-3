import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newFarm } from '../../features/farms-slice';
import FarmType, { validateFarm } from '../../types/farm-type';

type UseCreateFarmProps = {
  onSuccess?: (data: FarmType) => void;
};

function useCreateFarm({ onSuccess }: UseCreateFarmProps) {
  const [errors, setErrors] = useState<any>({});
  const dispatch = useDispatch();

  return {
    fetch: (farm: FarmType) => {
      const errors = validateFarm(farm);
      if (Object.keys(errors).length) {
        setErrors(errors);
        return;
      }

      dispatch(newFarm(farm));
      onSuccess?.(farm);
    },
    pending: false,
    errors,
  };
}

export default useCreateFarm;
