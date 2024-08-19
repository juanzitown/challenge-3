type ButtonProps = {
  type?: 'button' | 'submit';
  onClick?: () => void;
  children: React.ReactNode;
};

function Button({ type = 'button', onClick, children }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
    >
      {children}
    </button>
  );
}

export default Button;
