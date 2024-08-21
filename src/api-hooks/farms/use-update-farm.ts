import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateFarm } from '../../features/farms-slice';
import FarmType, { validateFarm } from '../../types/farm-type';

type UseUpdateFarmProps = {
  onSuccess?: (data: FarmType) => void;
};

function useUpdateFarm({ onSuccess }: UseUpdateFarmProps) {
  const [errors, setErrors] = useState<any>({});
  const dispatch = useDispatch();

  return {
    fetch: (farm: FarmType) => {
      const errors = validateFarm(farm);
      if (Object.keys(errors).length) {
        setErrors(errors);
        return;
      }

      dispatch(updateFarm(farm));
      onSuccess?.(farm);
    },
    pending: false,
    errors,
  };
}

export default useUpdateFarm;
