import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'java', label: 'Java' },
  { value: 'python', label: 'Python' },
  { value: 'go', label: 'Go' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'ruby', label: 'Ruby' },
];

function MultiSelect() {
  const [selectedOptions, setSelectedOptions] = React.useState<any[]>([]);

  const handleChange = (selectedOptions: any) => {
    setSelectedOptions(selectedOptions);
  };

  return (
    <div>
      <Select
        isMulti
        options={options}
        classNamePrefix="select"
        onChange={handleChange}
        value={selectedOptions}
      />
    </div>
  );
}

export default MultiSelect;
