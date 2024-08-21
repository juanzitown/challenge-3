type ButtonProps = {
  type?: 'button' | 'submit';
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'danger';
};

function Button({ type = 'button', onClick, children, variant }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={[
        baseClasses,
        variant === 'primary'
          ? primaryClasses
          : variant === 'danger'
            ? dangerClasses
            : defaultClasses,
      ].join(' ')}
    >
      {children}
    </button>
  );
}

export default Button;

const baseClasses =
  'px-4 py-2 font-medium rounded-lg shadow-md focus:outline-none focus:ring transition uppercase outline-none';
const primaryClasses =
  'bg-aurora-500 text-white hover:bg-aurora-600 focus:ring-aurora-300';
const dangerClasses =
  'bg-red-500 text-white hover:bg-red-700 focus:ring-red-400';
const defaultClasses =
  'bg-gray-50 text-gray-700 border border-gray-300 hover:bg-gray-100 focus:ring-gray-300';
