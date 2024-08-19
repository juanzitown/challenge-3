import { Link } from 'react-router-dom';
import useFarmers from '../../api-hooks/farmers/use-farmers';
import Button from '../../components/button';
import PrivateLayout from '../../components/private-layout';

function ListFarmerScreen() {
  const farmers = useFarmers();
  return (
    <PrivateLayout>
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-semibold text-2xl">Farmers</h1>
        <Link to="/farmers/new">
          <Button>New Farmer</Button>
        </Link>
      </div>

      {farmers?.map?.((farmer) => {
        return (
          <div className="text-sm" key={farmer?.id}>
            {farmer?.name}
          </div>
        );
      })}
    </PrivateLayout>
  );
}

export default ListFarmerScreen;
