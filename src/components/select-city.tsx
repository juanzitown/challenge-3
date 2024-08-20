import Input, { InputProps } from './input';

type SelectCityProps = {} & InputProps;

function SelectCity(props: SelectCityProps) {
  return <Input {...props} />;
}

export default SelectCity;
