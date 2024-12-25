import React from "react";
import { FaSearch, FaBell, FaUserCircle, FaChevronDown } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow-md sticky top-0 z-10 w-full">
      {/* Left Section: Search Bar */}
      <div className="flex items-center flex-grow">
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Search"
          />
          <FaSearch className="absolute right-3 top-3 text-gray-400" />
        </div>
      </div>

      {/* Right Section: Notifications and Profile */}
      <div className="flex items-center gap-6">
        {/* Notifications */}
        <div className="relative cursor-pointer" aria-label="Notifications">
          <FaBell className="text-gray-600 text-xl" />
          <span className="absolute top-0 right-0 px-1.5 py-0.5 text-xs font-semibold text-white bg-red-500 rounded-full">
            3
          </span>
        </div>

        {/* Profile */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <FaUserCircle className="text-gray-600 text-3xl" />
          <span className="hidden md:block text-gray-800 font-medium">
            Tom Cook
          </span>
          <FaChevronDown className="text-gray-600 text-sm" />
        </div>
      </div>
    </header>
  );
};

export default Header;
