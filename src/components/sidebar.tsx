import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();
  return (
    <div className="min-h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="flex items-center justify-center h-16 border-b border-gray-700">
        <h1 className="text-2xl">Challenge</h1>
      </div>
      <nav className="flex flex-col mt-4">
        <Link
          to="/"
          className={[
            'py-2 px-4 hover:bg-gray-700 border-l-4 transition',
            location?.pathname === '/'
              ? 'border-white bg-white/5'
              : 'border-transparent',
          ].join(' ')}
        >
          Dashboard
        </Link>
        <Link
          to="/farms"
          className={[
            'py-2 px-4 hover:bg-gray-700 border-l-4 transition',
            location?.pathname?.includes?.('/farms')
              ? 'border-white bg-white/5'
              : 'border-transparent',
          ].join(' ')}
        >
          Fazendas
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
