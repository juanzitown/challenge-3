import RegisterTypeEnum from './register-type-enum';

type FarmerType = {
  name: string;
  register: {
    type: RegisterTypeEnum;
    number: string;
  };
};

export default FarmerType;
