import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useCreateFarm from '../../api-hooks/farms/use-create-farm';
import useGetFarmById from '../../api-hooks/farms/use-get-farm-by-id';
import useUpdateFarm from '../../api-hooks/farms/use-update-farm';
import Button from '../../components/button';
import Debug from '../../components/debug';
import Input from '../../components/input';
import MultiSelectCrops from '../../components/multi-select-crops';
import PrivateLayout from '../../components/private-layout';
import SelectCity from '../../components/select-city';
import SelectRegisterType from '../../components/select-register-type';
import SelectState from '../../components/select-state';
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
            label="Fazenda"
            placeholder="Nome da fazenda"
            value={form?.name}
            onChange={(value) => {
              setForm((state) => ({
                ...(state || {}),
                name: value || '',
              }));
            }}
          />
          <SelectCity
            label="Cidade"
            placeholder="Nome da cidade"
            value={form?.city}
            onChange={(value) => {
              setForm((state) => ({
                ...(state || {}),
                city: value || '',
              }));
            }}
          />
          <SelectState
            label="Estado"
            placeholder="Nome do estado"
            value={form?.state}
            onChange={(value) => {
              setForm((state) => ({
                ...(state || {}),
                state: value || '',
              }));
            }}
          />
          <Input
            label="Área total (hectares)"
            value={form?.totalAreaSize as any}
            onChange={(value) => {
              setForm((state) => ({
                ...(state || {}),
                totalAreaSize: value || ('' as any),
              }));
            }}
          />
          <Input
            label="Área agricultável (hectares)"
            value={form?.vegetationAreaSize as any}
            onChange={(value) => {
              setForm((state) => ({
                ...(state || {}),
                vegetationAreaSize: value || ('' as any),
              }));
            }}
          />
          <Input
            label="Área de vegetação (hectares)"
            value={form?.vegetationAreaSize as any}
            onChange={(value) => {
              setForm((state) => ({
                ...(state || {}),
                vegetationAreaSize: value || ('' as any),
              }));
            }}
          />
          <MultiSelectCrops
            label="Culturas Plantadas"
            placeholder="Selecione uma ou mais opções"
            values={form?.crops}
            onChange={(values) => {
              setForm((state) => ({
                ...(state || {}),
                crops: values || [],
              }));
            }}
          />
          <Input
            label="Nome do Produtor"
            value={form?.farmer?.name}
            onChange={(value) => {
              setForm((state) => ({
                ...(state || {}),
                farmer: {
                  ...(state?.farmer || {}),
                  name: value || '',
                },
              }));
            }}
          />
          <div className="flex flex-row gap-4">
            <SelectRegisterType
              label="Tipo de registro"
              value={form?.farmer?.register?.type}
              onChange={(value) => {
                setForm((state) => ({
                  ...(state || {}),
                  farmer: {
                    ...(state?.farmer || {}),
                    register: {
                      ...(state?.farmer?.register || {}),
                      type: value || ('' as any),
                    },
                  },
                }));
              }}
            />
            <Input
              label="CPF ou CNPJ"
              value={form?.farmer?.register?.number}
              onChange={(value) => {
                setForm((state) => ({
                  ...(state || {}),
                  farmer: {
                    ...(state?.farmer || {}),
                    register: {
                      ...(state?.farmer?.register || {}),
                      number: value || ('' as any),
                    },
                  },
                }));
              }}
            />
          </div>
          <Button type="submit">{isEdit ? 'Update' : 'New Farm'}</Button>
        </form>
      </div>
      <Debug />
    </PrivateLayout>
  );
}

export default FarmFormScreen;
