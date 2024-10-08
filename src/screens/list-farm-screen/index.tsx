import { Link } from 'react-router-dom';
import useFarms from '../../api-hooks/farms/use-farms';
import Button from '../../components/button';
import NonIdealState from '../../components/non-ideal-state';
import PrivateLayout from '../../components/private-layout';
import FarmListItem from './farm-list-item';

function ListFarmScreen() {
  const { data: farms } = useFarms();

  const isNonIdealState = !farms?.length;
  return (
    <PrivateLayout>
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-semibold text-2xl">Fazendas</h1>
        <Link to="/farms/new" className="outline-none">
          <Button variant="primary">Nova Fazenda</Button>
        </Link>
      </div>
      {isNonIdealState && <NonIdealState />}
      <div className="py-6 flex flex-col gap-2">
        {farms?.map?.((farm) => {
          return <FarmListItem key={farm?.id} farm={farm} />;
        })}
      </div>
    </PrivateLayout>
  );
}

export default ListFarmScreen;
