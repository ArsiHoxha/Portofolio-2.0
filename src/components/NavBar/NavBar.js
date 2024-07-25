import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full z-20 top-0 bg-transparent">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* Add your logo or site name here if needed */}
        </a>
        <div className="flex items-center md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
        <div className={`flex flex-col md:flex-row items-center space-x-3 md:space-x-0 rtl:space-x-reverse ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 font-black">
            <li>
              <a href="/" className="text-white hover:text-blue-700">Home</a>
            </li>
            <li>
              <a href="/Technologies" className="text-white hover:text-blue-700">Technologies</a>
            </li>
            <li>
              <a href="/Timeline" className="text-white hover:text-blue-700">Timeline</a>
            </li>
            <li>
              <a href="/Projects" className="text-white hover:text-blue-700">Projects</a>
            </li>
            <li>
              <a href="/Contact" className="text-white hover:text-blue-700">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
