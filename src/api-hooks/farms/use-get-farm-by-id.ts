import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import FarmType from '../../types/farm-type';

type UseGetFarmByIdProps = {
  id: FarmType['id'];
};

function useGetFarmById({ id }: UseGetFarmByIdProps) {
  const farms = useSelector((state: RootState) => state.farms.list);
  return {
    data: farms?.find?.((farm) => farm?.id === id),
    pending: false,
  };
}

export default useGetFarmById;
