type ButtonProps = {
  type?: 'button' | 'submit';
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary';
};

function Button({ type = 'button', onClick, children, variant }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={[
        baseClasses,
        variant === 'primary' ? primaryClasses : defaultClasses,
      ].join(' ')}
    >
      {children}
    </button>
  );
}

export default Button;

const baseClasses =
  'px-4 py-2 font-medium rounded-lg shadow-md focus:outline-none focus:ring transition uppercase';
const primaryClasses =
  'bg-blue-500 text-white hover:bg-blue-700 focus:ring-blue-400';
const defaultClasses =
  'bg-gray-50 text-gray-700 border border-gray-300 hover:bg-gray-100 focus:ring-gray-300';
