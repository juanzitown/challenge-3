import CropEnum from './crop-enum';
import FarmerType from './farmer-type';
import RegisterTypeEnum, {
  isValidCNPJ,
  isValidCPF,
} from './register-type-enum';

type FarmType = {
  id: number;
  name: string;
  city: string;
  state: string;
  totalAreaSize: number;
  farmableAreaSize: number;
  vegetationAreaSize: number;

  crops: CropEnum[];
  farmer: FarmerType;
};

export default FarmType;

export function validateFarm(farm: FarmType) {
  const error: any = {};
  if (!farm?.name) {
    error['name'] = 'Campo obrigatório';
  }
  if (!farm?.totalAreaSize) {
    error['totalAreaSize'] = 'Campo obrigatório';
  } else if (
    Number(farm?.totalAreaSize || 0) <
    Number(farm?.farmableAreaSize || 0) + Number(farm?.vegetationAreaSize || 0)
  ) {
    error['totalAreaSize'] = 'A soma das áreas deve ser menor que o total';
  }

  if (!farm?.farmableAreaSize) {
    error['farmableAreaSize'] = 'Campo obrigatório';
  }
  if (!farm?.vegetationAreaSize) {
    error['vegetationAreaSize'] = 'Campo obrigatório';
  }
  if (!farm?.city) {
    error['city'] = 'Campo obrigatório';
  }
  if (!farm?.state) {
    error['state'] = 'Campo obrigatório';
  }
  if (!farm?.crops?.length) {
    error['crops'] = 'Campo obrigatório';
  }

  if (farm?.farmer?.register?.number && !farm?.farmer?.register?.type) {
    error['farmer.register.type'] = 'Selecione um tipo primeiro';
  } else if (farm?.farmer?.register?.number) {
    if (
      (farm?.farmer?.register?.type as any)?.value === RegisterTypeEnum.CPF &&
      !isValidCPF(farm?.farmer?.register?.number)
    ) {
      error['farmer.register.number'] = 'CPF inválido';
    } else if (
      (farm?.farmer?.register?.type as any)?.value === RegisterTypeEnum.CNPJ &&
      !isValidCNPJ(farm?.farmer?.register?.number)
    ) {
      error['farmer.register.number'] = 'CNPJ inválido';
    }
  }
  return error;
}
