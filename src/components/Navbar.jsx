import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar bg-base-100 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        {/* Navbar title */}
        <div className="navbar-start">
          <a href="/" className="text-2xl font-bold text-gray-400">Arian's Portfolio</a>
        </div>
        {/* Desktop Navbar links */}
        <div className="navbar-end hidden lg:flex flex-1 justify-end">
          <ul className="menu menu-horizontal space-x-4">
            <li><a href="#hero" className="text-lg text-gray-400 hover:text-gray-100">Home</a></li>
            <li><a href="#about" className="text-lg text-gray-400 hover:text-gray-100">About</a></li>
            <li><a href="#projects" className="text-lg text-gray-400 hover:text-gray-100">Projects</a></li>
          </ul>
        </div>
        {/* Mobile menu toggle button */}
        <div className="navbar-end lg:hidden flex justify-end w-full">
          <button onClick={toggleMenu} className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="lg:hidden bg-base-100 shadow-md absolute top-full left-0 w-full z-50">
          <ul className="menu menu-vertical px-4 py-2 space-y-2">
            <li><a href="#hero" className="text-lg text-gray-300 hover:text-gray-100">Home</a></li>
            <li><a href="#about" className="text-lg text-gray-300 hover:text-gray-100">About</a></li>
            <li><a href="#projects" className="text-lg text-gray-300 hover:text-gray-100">Projects</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
