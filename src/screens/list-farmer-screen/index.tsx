import { Link, useNavigate } from 'react-router-dom';
import useFarmers from '../../api-hooks/farmers/use-farmers';
import Button from '../../components/button';
import IconButton from '../../components/icon-button';
import PrivateLayout from '../../components/private-layout';
import DeleteFarmerButton from './delete-farmer-button';

function ListFarmerScreen() {
  const { data: farmers } = useFarmers();
  const navigate = useNavigate();
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
          <div
            key={farmer?.id}
            className="flex flex-row items-center border rounded px-4 py-1 gap-4"
          >
            <div className="flex flex-col flex-1 text-sm">{farmer?.name}</div>
            <div className="flex flex-row items-center justify-center gap-2">
              <IconButton
                icon="edit"
                onClick={() => {
                  navigate(`/farmers/${farmer?.id}`);
                }}
              />
              <DeleteFarmerButton farmer={farmer} />
            </div>
          </div>
        );
      })}
    </PrivateLayout>
  );
}

export default ListFarmerScreen;
