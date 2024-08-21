import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useCreateFarm from '../../api-hooks/farms/use-create-farm';
import useGetFarmById from '../../api-hooks/farms/use-get-farm-by-id';
import useUpdateFarm from '../../api-hooks/farms/use-update-farm';
import Button from '../../components/button';
import Input from '../../components/input';
import MultiSelectCrops from '../../components/multi-select-crops';
import PrivateLayout from '../../components/private-layout';
import SelectCity from '../../components/select-city';
import SelectRegisterType from '../../components/select-register-type';
import SelectState from '../../components/select-state';
import FarmType from '../../types/farm-type';
import RegisterTypeEnum from '../../types/register-type-enum';

function FarmFormScreen() {
  const [form, setForm] = useState<FarmType>({} as any);
  const params = useParams();
  const navigate = useNavigate();

  const { data: farm } = useGetFarmById({
    id: Number(params?.id || 0),
  });

  const { fetch: createFarm, errors } = useCreateFarm({
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
      <div className="flex flex-col max-w-screen-sm gap-6">
        <h1 className="font-semibold text-2xl">
          {isEdit ? 'Atualizar Fazenda' : 'Nova Fazenda'}
        </h1>
        <form
          className="flex flex-col gap-7"
          onSubmit={(event) => {
            event?.preventDefault?.();
            if (isEdit) {
              updateFarm(form);
            } else {
              createFarm(form);
            }
          }}
        >
          <h2 className="text-xs font-bold uppercase text-gray-700 tracking-wide">
            Informações da fazenda
          </h2>
          <Input
            label="Nome *"
            placeholder="Nome da fazenda"
            value={form?.name}
            onChange={(value) => {
              setForm((state) => ({
                ...(state || {}),
                name: value || '',
              }));
            }}
            error={errors?.name}
          />
          <div className="flex flex-col w-[260px]">
            <Input
              label="Área total (hectares) *"
              type="number"
              min={1}
              value={form?.totalAreaSize as any}
              onChange={(value) => {
                setForm((state) => ({
                  ...(state || {}),
                  totalAreaSize: value || ('' as any),
                }));
              }}
              error={errors?.totalAreaSize}
            />
          </div>
          <div className="flex flex-row flex-wrap gap-4">
            <Input
              type="number"
              min={1}
              label="Área agricultável (hectares) *"
              value={form?.farmableAreaSize as any}
              onChange={(value) => {
                setForm((state) => ({
                  ...(state || {}),
                  farmableAreaSize: value || ('' as any),
                }));
              }}
              error={errors?.farmableAreaSize}
            />
            <Input
              type="number"
              min={1}
              label="Área de vegetação (hectares) *"
              value={form?.vegetationAreaSize as any}
              onChange={(value) => {
                setForm((state) => ({
                  ...(state || {}),
                  vegetationAreaSize: value || ('' as any),
                }));
              }}
              error={errors?.vegetationAreaSize}
            />
          </div>
          <div className="flex flex-row flex-wrap gap-4">
            <SelectCity
              label="Cidade *"
              placeholder="Nome da cidade"
              value={form?.city}
              onChange={(value) => {
                setForm((state) => ({
                  ...(state || {}),
                  city: value || '',
                }));
              }}
              error={errors?.city}
            />
            <SelectState
              label="Estado *"
              placeholder="Nome do estado"
              value={form?.state}
              onChange={(value) => {
                setForm((state) => ({
                  ...(state || {}),
                  state: value || '',
                }));
              }}
              error={errors?.state}
            />
          </div>

          <MultiSelectCrops
            label="Culturas Plantadas *"
            placeholder="Selecione uma ou mais opções"
            values={form?.crops}
            onChange={(values) => {
              setForm((state) => ({
                ...(state || {}),
                crops: values || [],
              }));
            }}
            error={errors?.crops}
          />

          <h2 className="text-xs font-bold uppercase text-gray-700 tracking-wide">
            Informações do Produtor
          </h2>
          <Input
            label="Nome"
            placeholder="Nome do produtor"
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
              label="Tipo de documento"
              placeholder="Selecione um tipo"
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
              error={errors?.['farmer.register.type']}
            />
            <Input
              label={
                (form?.farmer?.register?.type as any)?.value ===
                RegisterTypeEnum.CPF
                  ? 'CPF'
                  : (form?.farmer?.register?.type as any)?.value ===
                      RegisterTypeEnum.CNPJ
                    ? 'CNPJ'
                    : 'Número do documento'
              }
              placeholder="Número do documento"
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
              error={errors?.['farmer.register.number']}
            />
          </div>
          <div className="flex flex-row items-center justify-end gap-4">
            <Button
              onClick={() => {
                navigate('/farms');
              }}
            >
              Voltar
            </Button>
            <Button type="submit" variant="primary">
              {isEdit ? 'Atualizar' : 'Nova Fazenda'}
            </Button>
          </div>
        </form>
      </div>
    </PrivateLayout>
  );
}

export default FarmFormScreen;
