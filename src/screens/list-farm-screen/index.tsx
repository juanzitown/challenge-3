import { Link, useNavigate } from 'react-router-dom';
import useFarms from '../../api-hooks/farms/use-farms';
import Button from '../../components/button';
import IconButton from '../../components/icon-button';
import PrivateLayout from '../../components/private-layout';
import DeleteFarmButton from './delete-farm-button';

function ListFarmScreen() {
  const { data: farms } = useFarms();
  const navigate = useNavigate();

  return (
    <PrivateLayout>
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-semibold text-2xl">Farms</h1>
        <Link to="/farms/new">
          <Button>New Farm</Button>
        </Link>
      </div>

      {farms?.map?.((farm) => {
        return (
          <div
            key={farm?.id}
            className="flex flex-row items-center border rounded px-4 py-1 gap-4"
          >
            <div className="flex flex-col flex-1 text-sm">{farm?.name}</div>
            <div className="flex flex-row items-center justify-center gap-2">
              <IconButton
                icon="edit"
                onClick={() => {
                  navigate(`/farms/${farm?.id}`);
                }}
              />
              <DeleteFarmButton farm={farm} />
            </div>
          </div>
        );
      })}
    </PrivateLayout>
  );
}

export default ListFarmScreen;
