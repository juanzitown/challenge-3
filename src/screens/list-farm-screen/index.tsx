import { Link, useNavigate } from 'react-router-dom';
import useFarms from '../../api-hooks/farms/use-farms';
import Button from '../../components/button';
import PrivateLayout from '../../components/private-layout';
import FarmListItem from './farm-list-item';

function ListFarmScreen() {
  const { data: farms } = useFarms();
  const navigate = useNavigate();

  return (
    <PrivateLayout>
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-semibold text-2xl">Fazendas</h1>
        <Link to="/farms/new">
          <Button>Nova Fazenda</Button>
        </Link>
      </div>
      <div className="py-6 flex flex-col gap-2">
        {farms?.map?.((farm) => {
          return <FarmListItem key={farm?.id} farm={farm} />;
        })}
      </div>
    </PrivateLayout>
  );
}

export default ListFarmScreen;
