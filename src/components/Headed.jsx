import React, { useContext } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoLogoOctocat } from "react-icons/io5";


const Head = () => {

  return (
    <header className="w-full px-4 md:px-6 py-4 h-fixed bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo & Dropdown */}
        <div className="flex items-center gap-3">
          <IoLogoOctocat className="text-4xl" />
          <h1 className="font-bold text-md md:text-3xl text-white">
            Chat.VisionTaggerAI
          </h1>
          <IoMdArrowDropdown className="text-white text-3xl cursor-pointer hover:opacity-80 transition duration-300" />
        </div>

        {/* Sign Up Button */}
        <button className="bg-white text-purple-600 text-sm md:text-xl font-semibold px-5 py-2 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:bg-purple-100">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Head;
