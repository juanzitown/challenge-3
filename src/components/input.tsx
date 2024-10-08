export type InputProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value?: string) => void;
  error?: string;
  type?: 'text' | 'number';
  min?: number;
};

function Input({
  type,
  min,
  label,
  placeholder,
  value,
  onChange,
  error,
}: InputProps) {
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
        <input
          type={type}
          min={min}
          placeholder={placeholder}
          value={value || ''}
          onChange={(event) => onChange?.(event?.target?.value)}
          className={[
            'w-full h-[38px] px-3 py-2 text-gray-700 border rounded-lg transition focus:outline-none focus:ring',
            error
              ? 'border-red-400 focus:ring-red-200'
              : 'border-gray-300 focus:border-blue-500',
          ].join(' ')}
        />
      </div>
      {Boolean(error) && (
        <div className="h-0 text-[10px] text-red-500">{error}</div>
      )}
    </div>
  );
}

export default Input;
