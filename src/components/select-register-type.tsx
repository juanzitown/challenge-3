import Select from 'react-select';
import RegisterTypeEnum from '../types/register-type-enum';

const options = Object.entries(RegisterTypeEnum).map(([key, value]) => {
  return { value: key, label: value };
});

type SelectRegisterTypeProps = {
  label?: string;
  placeholder?: string;
  value?: any;
  onChange?: (value?: any) => void;
  error?: string;
};

function SelectRegisterType({
  value,
  label,
  placeholder,
  onChange,
  error,
}: SelectRegisterTypeProps) {
  const handleChange = (selectedOptions: any) => {
    onChange?.(selectedOptions);
  };

  return (
    <div className="flex flex-col min-w-40">
      <div className="flex flex-col gap-0.5">
        {Boolean(label) && (
          <label className="text-sm text-gray-700">{label}</label>
        )}
        <Select
          placeholder={placeholder}
          options={options}
          classNamePrefix="select"
          onChange={handleChange}
          value={value}
        />
      </div>
      {Boolean(error) && (
        <div className="h-0 mt-0.5 text-xs text-red-500">{error}</div>
      )}
    </div>
  );
}

export default SelectRegisterType;
