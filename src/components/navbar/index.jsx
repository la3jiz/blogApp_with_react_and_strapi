import React, { useState } from "react";
import { menu, close, logo } from "../../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="w-full h-[80px] z-10 bg-white fixed drop-shadow-lg">
      <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto">
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="sm:ml-10 ss:ml-10 md:ml-3 opacity-[55%] w-full h-[25px]"
          />
        </div>

        <div className="flex items-center">
          <ul className="hidden md:flex gap-8 ">
            <li className="hover:text-indigo-500 transition-all duration-100">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-indigo-500 transition-all duration-100">
              <a href="#">About</a>
            </li>
            <li className="hover:text-indigo-500 transition-all duration-100">
              <a href="#">Support</a>
            </li>
            <li className="hover:text-indigo-500 transition-all duration-100">
              <a href="#">Platform</a>
            </li>
            <li className="hover:text-indigo-500 transition-all duration-100">
              <a href="#">Pricing</a>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex sm:mr-10 md:mr-10">
          <button className="border-none bg-transparent text-black mr-4 hover:text-indigo-500 transition-all duration-100">
            Login
          </button>
          <button className="px-8 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-500 transition-all duration-100">
            Sign Up
          </button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          <img
            src={!toggle ? menu : close}
            alt="menu"
            className="w-[28px] h-[28px] object-contain mr-10"
          />
        </div>
      </div>

      <ul
        className={
          toggle ? "absolute bg-white w-full h-auto px-8 md:hidden" : "hidden"
        }
      >
      <li className="hover:text-indigo-500 transition-all duration-100 mb-4">
      <a href="#">Home</a>
    </li>
    <li className="hover:text-indigo-500 transition-all duration-100 mb-4">
      <a href="#">About</a>
    </li>
    <li className="hover:text-indigo-500 transition-all duration-100 mb-4">
      <a href="#">Support</a>
    </li>
    <li className="hover:text-indigo-500 transition-all duration-100 mb-4">
      <a href="#">Platform</a>
    </li>
    <li className="hover:text-indigo-500 transition-all duration-100 mb-4">
      <a href="#">Pricing</a>
    </li>
        <div className="flex flex-col my-8">
          <button className="bg-transparent text-indigo-600 mb-4 py-3 px-8 border-[1px] border-indigo-600 rounded-xl ">
            Login
          </button>
          <button className="px-8 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-500 transition-all duration-100">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
