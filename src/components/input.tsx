type InputProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value?: string) => void;
};

function Input({ label, placeholder, value, onChange }: InputProps) {
  return (
    <div className="flex flex-col gap-0.5">
      {Boolean(label) && (
        <label className="text-sm text-gray-700">{label}</label>
      )}
      <input
        placeholder={placeholder}
        value={value || ''}
        onChange={(event) => onChange?.(event?.target?.value)}
        className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}

export default Input;
