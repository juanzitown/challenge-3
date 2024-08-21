type BackButtonProps = {
  onClick?: () => void;
};

function BackButton({ onClick }: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-10 h-10 bg-white rounded-full border border-gray-300 hover:bg-gray-100 focus:ring-gray-300 focus:outline-none focus:ring transition"
      aria-label="Go Back"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-gray-700"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="currentColor"
      >
        <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
      </svg>
    </button>
  );
}

export default BackButton;
