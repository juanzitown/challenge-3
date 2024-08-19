type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
};

function Button({ onClick, children }: ButtonProps) {
  return (
    <button onClick={onClick} className="border p-1 rounded shadow">
      {children}
    </button>
  );
}

export default Button;
