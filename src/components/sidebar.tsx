import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="min-h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="flex items-center justify-center h-16 border-b border-gray-700">
        <h1 className="text-2xl">Brain Agriculture</h1>
      </div>
      <nav className="flex flex-col mt-4">
        <Link to="/" className="py-2 px-4 hover:bg-gray-700">
          Dashboard
        </Link>
        <Link to="/farmers" className="py-2 px-4 hover:bg-gray-700">
          Farmers
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
