import CropEnum from './crop-enum';
import FarmerType from './farmer-type';

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
