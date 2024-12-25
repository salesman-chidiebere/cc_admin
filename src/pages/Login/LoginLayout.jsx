import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Left Side */}
      <div className="w-full md:w-[40%] flex flex-col pl-10 py-2 md:p-10 justify-between">
        <div className="flex-grow mt-4">
          <Outlet />
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-[60%] hidden md:flex items-center justify-center overflow-hidden
      bg-[#3b65ff] text-white">
        <div className="h-full w-full flex items-center justify-center p-6 pr-12">
          {/* Increased padding on the right with `pr-12` */}
          <div className="h-full w-full rounded-lg overflow-hidden">
          <h2 className="text-4xl font-bold text-center">
                We are more than just a company
            </h2>
            <p className="text-center mt-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
