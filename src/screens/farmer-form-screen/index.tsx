import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useCreateFarmer from '../../api-hooks/farmers/use-create-farmer';
import Input from '../../components/input';
import PrivateLayout from '../../components/private-layout';
import FarmerType from '../../types/farmer-type';

function FarmerFormScreen() {
  const [form, setForm] = useState<FarmerType>({} as any);
  const { fetch: createFarmer, pending } = useCreateFarmer();
  let params = useParams();
  console.log(params);
  return (
    <PrivateLayout>
      <div>
        <h1 className="font-semibold text-2xl">New Farmer</h1>

        <div>
          <Input
            label="Nome"
            value={form?.name}
            onChange={(value) => {
              setForm((state) => ({ ...state, name: value || '' }));
            }}
          />
        </div>
      </div>
    </PrivateLayout>
  );
}

export default FarmerFormScreen;
