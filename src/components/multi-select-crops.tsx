import Select from 'react-select';
import CropEnum from '../types/crop-enum';

const options = Object.entries(CropEnum).map(([key, value]) => {
  return { value: key, label: value };
});

type MultiSelectCropsProps = {
  label?: string;
  placeholder?: string;
  values?: any[];
  onChange?: (value?: any[]) => void;
  error?: string;
};

function MultiSelectCrops({
  values,
  label,
  placeholder,
  onChange,
  error,
}: MultiSelectCropsProps) {
  const handleChange = (selectedOptions: any) => {
    onChange?.(selectedOptions);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-0.5">
        {Boolean(label) && (
          <label
            className={[
              'text-sm',
              error ? 'text-red-500' : 'text-gray-700',
            ].join(' ')}
          >
            {label}
          </label>
        )}
        <div
          className={[
            'rounded-lg focus-within:ring',
            error ? 'focus-within:ring-red-300' : '',
          ].join(' ')}
        >
          <Select
            isMulti
            styles={getStyles(error)}
            placeholder={placeholder}
            options={options}
            classNamePrefix="select"
            onChange={handleChange}
            value={values}
          />
        </div>
      </div>
      {Boolean(error) && (
        <div className="h-0 text-[10px] text-red-500">{error}</div>
      )}
    </div>
  );
}

export default MultiSelectCrops;

function getStyles(error: any) {
  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      borderRadius: '0.5rem',
      borderColor: error
        ? 'rgb(239 68 68)'
        : state.isFocused
          ? 'rgb(209, 213, 219)'
          : 'rgb(209, 213, 219)',
      '&:hover': {
        borderColor: error ? 'rgb(239 68 68)' : 'rgb(209, 213, 219)',
      },
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: 'rgb(156 163 175)', //bg-gray-400
    }),
  };

  return customStyles;
}
