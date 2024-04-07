import React, { useState } from 'react';

import { Mpl } from '../assets';
import { img2 } from '../assets';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  
  };

  return (
    <nav className="bg-white shadow-lg relative z-10 m-2 mt-0  rounded-xl">
      <div className="container mx-auto">
        <div className="bg-white flex justify-between items-center">
          <div className='p-2'>
            <img src={Mpl} alt="Logo" className=" h-10 md:h-20" />
          </div>
          <div className="relative flex justify-center items-center ">
            <img src={img2} alt="SecondImage" className="w-auto h-8 m-1" />
          </div>
          <div className="hidden md:flex md:items-center m-2 p-2">
            <a href="#about" className="p-3 hover:bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl m-2 cursor-pointer duration-300 hover:text-white transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-5">About</a>

            <a href="#Tech" className="p-3 hover:bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl m-2 cursor-pointer duration-300 hover:text-white transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-5">Technical</a>
            <a href="#non" className="p-3 hover:bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl m-2 cursor-pointer duration-300 hover:text-white transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-5">Non-Tech</a>
            <a href="#footer" className="p-3 bg-red-500 text-black  rounded-md hover:bg-red-600 transition duration-300  transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-5">Contact Us</a>
            
          </div>
          <div className="relative md:hidden">
            <button onClick={toggleDropdown} className="text-gray-700 focus:outline-none">
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
            {isOpen && (
              <div className="absolute top-14 right-0 -mt-1 mb-3 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                <div className="py-1 ">
                  <a href="#Tech" onClick={closeDropdown} className="  transform hover:scale-105 focus:outline-none focus:ring-2 m-2 rounded-xl focus:ring-blue-600 focus:ring-opacity-50 block px-6 py-2 text-gray-800 hover:bg-gray-200 transition duration-300 ease-in-out font-bold">Tech</a>
                  <a href="#non" onClick={closeDropdown} className="  transform hover:scale-105 focus:outline-none focus:ring-2 m-2 rounded-xl focus:ring-blue-600 focus:ring-opacity-50 block px-6 py-2 text-gray-800 hover:bg-gray-200 transition duration-300 ease-in-out font-bold">Non-Tech</a>
                  <a href="#about" onClick={closeDropdown} className="  transform hover:scale-105 focus:outline-none focus:ring-2 m-2 rounded-xl focus:ring-blue-600 focus:ring-opacity-50 block px-6 py-2 text-gray-800 hover:bg-gray-200 transition duration-300 ease-in-out font-bold">About Us</a>
                  <a href="#footer" onClick={closeDropdown} className="  transform hover:scale-105 focus:outline-none focus:ring-2 m-2 rounded-xl focus:ring-blue-600 focus:ring-opacity-50 block px-6 py-2 text-gray-800 hover:bg-gray-200 transition duration-300 ease-in-out font-bold">Contact Us</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
