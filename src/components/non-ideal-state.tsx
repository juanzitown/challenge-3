function NonIdealState() {
  return (
    <div className="flex flex-col text-center justify-center items-center p-4 gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-gray-700"
        height="76px"
        viewBox="0 -960 960 960"
        width="76px"
        fill="currentColor"
      >
        <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
      </svg>
      <h2 className="text-sm font-medium text-gray-700">
        Nenhuma informação encontrada
      </h2>
    </div>
  );
}

export default NonIdealState;
