import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function useFarms() {
  const farms = useSelector((state: RootState) => state.farms.list);
  return { data: farms, pending: false };
}

export default useFarms;
