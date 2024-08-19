import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useCreateFarmer from '../../api-hooks/farmers/use-create-farmer';
import Button from '../../components/button';
import Debug from '../../components/debug';
import Input from '../../components/input';
import PrivateLayout from '../../components/private-layout';
import FarmerType from '../../types/farmer-type';

function FarmerFormScreen() {
  const [form, setForm] = useState<FarmerType>({} as any);
  const navigate = useNavigate();
  const { fetch: createFarmer, pending } = useCreateFarmer({
    onSuccess(data) {
      navigate('/farmers');
    },
  });

  const params = useParams();
  const isEdit = Boolean(params?.id);

  return (
    <PrivateLayout>
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-2xl">
          {isEdit ? 'Update Farmer' : 'New Farmer'}
        </h1>
        <form
          onSubmit={(event) => {
            event?.preventDefault?.();
            createFarmer(form);
          }}
        >
          <Input
            label="Name"
            value={form?.name}
            onChange={(value) => {
              setForm((state) => ({ ...state, name: value || '' }));
            }}
          />
          <Button type="submit">{isEdit ? 'Save Farmer' : 'New Farmer'}</Button>
        </form>
      </div>
      <Debug />
    </PrivateLayout>
  );
}

export default FarmerFormScreen;
