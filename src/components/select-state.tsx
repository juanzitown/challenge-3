import Input, { InputProps } from './input';

type SelectStateProps = {} & InputProps;

function SelectState(props: SelectStateProps) {
  return <Input {...props} />;
}

export default SelectState;
