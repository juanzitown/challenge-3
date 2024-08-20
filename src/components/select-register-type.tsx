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
        <div className="focus-within:ring rounded">
          <Select
            styles={customStyles}
            placeholder={placeholder}
            options={options}
            classNamePrefix="select"
            onChange={handleChange}
            value={value}
          />
        </div>
      </div>
      {Boolean(error) && (
        <div className="h-0 mt-0.5 text-xs text-red-500">{error}</div>
      )}
    </div>
  );
}

export default SelectRegisterType;

const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    borderColor: state.isFocused ? 'rgb(59, 130, 246)' : 'rgb(209, 213, 219)',
    '&:hover': {
      borderColor: 'rgb(209, 213, 219)',
    },
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: 'rgb(156 163 175)', //bg-gray-400
  }),
};
