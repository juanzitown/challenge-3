import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useCreateFarmer from '../../api-hooks/farmers/use-create-farmer';
import useGetFarmerById from '../../api-hooks/farmers/use-get-farmer-by-id';
import useUpdateFarmer from '../../api-hooks/farmers/use-update-farmer';
import Button from '../../components/button';
import Debug from '../../components/debug';
import Input from '../../components/input';
import PrivateLayout from '../../components/private-layout';
import FarmerType from '../../types/farmer-type';

function FarmerFormScreen() {
  const [form, setForm] = useState<FarmerType>({} as any);
  const params = useParams();
  const navigate = useNavigate();

  const { data: farmer, pending: pendingGetFarmerById } = useGetFarmerById({
    id: Number(params?.id || 0),
  });

  const { fetch: createFarmer, pending: pendingCreateFarmer } = useCreateFarmer(
    {
      onSuccess(data) {
        navigate('/farmers');
      },
    }
  );

  const { fetch: updateFarmer, pending: pendingUpdateFarmer } = useUpdateFarmer(
    {
      onSuccess(data) {
        navigate('/farmers');
      },
    }
  );

  //on update flow, sets form with data
  useEffect(() => {
    if (farmer?.id) {
      setForm(farmer);
    }
  }, [farmer?.id]);

  const isEdit = Boolean(params?.id);

  return (
    <PrivateLayout>
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-2xl">
          {isEdit ? 'Update Farmer' : 'New Farmer'}
        </h1>
        <form
          className="flex flex-col gap-6"
          onSubmit={(event) => {
            event?.preventDefault?.();
            if (isEdit) {
              updateFarmer(form);
            } else {
              createFarmer(form);
            }
          }}
        >
          <Input
            label="Name"
            value={form?.name}
            onChange={(value) => {
              setForm((state) => ({ ...state, name: value || '' }));
            }}
          />
          <Button type="submit">{isEdit ? 'Update' : 'New Farmer'}</Button>
        </form>
      </div>
      <Debug />
    </PrivateLayout>
  );
}

export default FarmerFormScreen;
