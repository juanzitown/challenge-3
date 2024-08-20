import RegisterTypeEnum from './register-type-enum';

type FarmerType = {
  name: string;
  city: string;
  state: string;
  register: {
    type: RegisterTypeEnum;
    number: string;
  };
};

export default FarmerType;
