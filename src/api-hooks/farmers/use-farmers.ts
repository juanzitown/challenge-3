import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function useFarmers() {
  const farmers = useSelector((state: RootState) => state.farmers.list);
  return farmers;
}

export default useFarmers;
