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
          <label className="text-sm text-gray-700">{label}</label>
        )}
        <Select
          isMulti
          placeholder={placeholder}
          options={options}
          classNamePrefix="select"
          onChange={handleChange}
          value={values}
        />
      </div>
      {Boolean(error) && (
        <div className="h-0 mt-0.5 text-xs text-red-500">{error}</div>
      )}
    </div>
  );
}

export default MultiSelectCrops;
