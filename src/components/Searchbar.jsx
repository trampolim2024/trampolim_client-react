import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Searchbar = () => {
  return (
    <div className='flex items-center gap-2'>
      <input type="text" className="p-3 w-[65vw] rounded-lg outline-none border border-gray-300 focus:border-orange-400 transition-all duration-200" placeholder="Pesquisar..." />
      <button className="rounded-lg outline-none border-none background-orange p-4 hover:background-blue duration-300 transition-all">
        <FaSearch className='text-white' size={17} />
      </button>
    </div>
  );
};

export default Searchbar;