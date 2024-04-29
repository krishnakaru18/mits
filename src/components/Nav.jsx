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
    <nav className="bg-white shadow-lg  z-10 lg:px-4 relative ">
      <div className="container mx-auto ">
        <div className="bg-white flex justify-between items-center ">
          <div>
            <img src={Mpl} alt="Logo" className=" h-9  md:h-14" />
          </div>
          <div className="hidden md:flex md:items-center m-2 p-2 ">
            <a href="#home" className="relative text-black hover:text-blue-400 cursor-pointer  ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-blue-500 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-blue-500 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] py-1  p-1 m-1 transform transition duration-300  hover:scale-105  focus:outline-none ">Home</a>
            <a href="#about" className="relative text-black hover:text-blue-400 cursor-pointer  ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-blue-500 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-blue-500 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] py-1  p-1 m-1 transform transition duration-300  hover:scale-105  focus:outline-none ">About</a>
            <a href="#Tech" className="relative text-black hover:text-blue-400 cursor-pointer  ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-blue-500 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-blue-500 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] py-1  p-1 m-1 transform transition duration-300  hover:scale-105  focus:outline-none ">Tech</a>
            <a href="#non" className="relative text-black hover:text-blue-400 cursor-pointer  ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-blue-500 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-blue-500 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] py-1  p-1 m-1 transform transition duration-300  hover:scale-105  focus:outline-none ">Non-Tech</a>
            <a href="#com" className="relative text-black hover:text-blue-400 cursor-pointer  ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-blue-500 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-blue-500 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] py-1  p-1 m-2 transform transition duration-300  hover:scale-105  focus:outline-none ">Committee</a>
            <a href="#footer" className="relative text-black hover:text-blue-400 cursor-pointer  ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-blue-500 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-blue-500 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] py-1  p-1 m-2 transform transition duration-300  hover:scale-105  focus:outline-none ">Contact Us</a>
            

          </div>
          <div className="relative md:hidden">

            <button onClick={toggleDropdown} className="p-3 focus:outline-none ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
            {isOpen && (
              <div className=" absolute top-14 right-0 pb-3 -mt-2  bg-white shadow-lg z-20">
                <div className="sm:justify-center sm:items-center px-6 py- flex-col justify-center items-center text-center ">
                  <a href="#home" onClick={closeDropdown} className="px-14 py-0.5 sm:px-40 transform  hover:scale-105 focus:outline-none block transition duration-300 ease-in-out mb-1">Home</a>
                  <a href="#about" onClick={closeDropdown} className="px-14 py-0.5 sm:px-40 transform  hover:scale-105 focus:outline-none block   transition duration-300 ease-in-out  mb-1">About</a>
                  <a href="#Tech" onClick={closeDropdown} className="px-14 py-0.5 sm:px-40 transform  hover:scale-105 focus:outline-none block  transition duration-300 ease-in-out mb-1">Technical</a>
                  <a href="#non" onClick={closeDropdown} className="px-14 py-0.5 sm:px-40 transform  hover:scale-105 focus:outline-none block  transition duration-300 ease-in-out  mb-1">Non-Tech</a>
                  <a href="#com" onClick={closeDropdown} className="px-14 py-0.5 sm:px-40 transform  hover:scale-105 focus:outline-none  block transition duration-300 ease-in-out  mb-1">Committee</a>
                  <a href="#footer" onClick={closeDropdown} className="px-14 py-0.5 sm:px-40 transform  hover:scale-105 focus:outline-none  block  transition duration-300 ease-in-out  mb-1">Contact Us</a>
                  
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

