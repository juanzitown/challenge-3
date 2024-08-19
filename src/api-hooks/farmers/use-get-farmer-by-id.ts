import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import FarmerType from '../../types/farmer-type';

type UseGetFarmerByIdProps = {
  id: FarmerType['id'];
};

function useGetFarmerById({ id }: UseGetFarmerByIdProps) {
  const farmers = useSelector((state: RootState) => state.farmers.list);
  return {
    data: farmers?.find?.((farmer) => farmer?.id === id),
    pending: false,
  };
}

export default useGetFarmerById;
