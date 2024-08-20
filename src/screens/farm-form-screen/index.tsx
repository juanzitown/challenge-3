import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useCreateFarm from '../../api-hooks/farms/use-create-farm';
import useGetFarmById from '../../api-hooks/farms/use-get-farm-by-id';
import useUpdateFarm from '../../api-hooks/farms/use-update-farm';
import Button from '../../components/button';
import Debug from '../../components/debug';
import Input from '../../components/input';
import PrivateLayout from '../../components/private-layout';
import FarmType from '../../types/farm-type';

function FarmFormScreen() {
  const [form, setForm] = useState<FarmType>({} as any);
  const params = useParams();
  const navigate = useNavigate();

  const { data: farm } = useGetFarmById({
    id: Number(params?.id || 0),
  });

  const { fetch: createFarm } = useCreateFarm({
    onSuccess(data) {
      navigate('/farms');
    },
  });

  const { fetch: updateFarm } = useUpdateFarm({
    onSuccess(data) {
      navigate('/farms');
    },
  });

  //on update flow, sets form with data
  useEffect(() => {
    if (farm?.id) {
      setForm(farm);
    }
  }, [farm?.id]);

  const isEdit = Boolean(params?.id);

  return (
    <PrivateLayout>
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-2xl">
          {isEdit ? 'Update Farm' : 'New Farm'}
        </h1>
        <form
          className="flex flex-col gap-6"
          onSubmit={(event) => {
            event?.preventDefault?.();
            if (isEdit) {
              updateFarm(form);
            } else {
              createFarm(form);
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
          <Button type="submit">{isEdit ? 'Update' : 'New Farm'}</Button>
        </form>
      </div>
      <Debug />
    </PrivateLayout>
  );
}

export default FarmFormScreen;
