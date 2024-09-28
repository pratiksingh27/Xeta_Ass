import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 p-4 bg-[#FFFFFF4D] flex justify-between items-center z-20">
      <div className="text-white font-bold text-lg">FITSMAP</div>
      
      {/* Hamburger Icon for Mobile */}
      <div className="flex md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {isOpen ? '✖' : '☰'} {/* Hamburger or Close Icon */}
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`flex-col md:flex md:flex-row md:items-center absolute md:static top-16 left-0 w-full md:w-auto transition-transform duration-300 ${isOpen ? 'transform translate-y-0' : 'transform -translate-y-96'} md:translate-y-0 bg-[#FFFFFF4D] md:bg-transparent`}>
        <div className="flex items-center justify-around space-x-4">
          <a href="#" className="text-white">Lorem ipsum</a>
          <a href="#" className="text-white">Lorem ipsum</a>
          <a href="#" className="text-white">Lorem ipsum</a>
          <a href="#" className="bg-transparent text-white border border-blue-500 px-4 py-2 rounded-full">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
