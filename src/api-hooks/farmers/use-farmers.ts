import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function useFarmers() {
  const farmers = useSelector((state: RootState) => state.farmers.list);
  return { data: farmers, pending: false };
}

export default useFarmers;
