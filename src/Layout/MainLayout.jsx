import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

const MainLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("toggled");

    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen overflow-hidden border-2 border-black w-full">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-50 transition-transform duration-300 ${
          isSidebarOpen ? "md:w-64" : "md:w-16"
        }`}
      >
        <Sidebar isCollapsed={!isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* Backdrop for Mobile */}
      {isSidebarOpen && window.innerWidth <= 768 && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 z-20`}
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col bg-gray-50 transition-all duration-300 ${
          isSidebarOpen ? "md:ml-[250px]" : "md:ml-16"
        }`}
      >
        {/* Top Bar */}
        <div className="sticky top-0 left-0 right-0 bg-white shadow-md z-10 h-[80px] flex items-center px-6">
          <div className="flex flex-1 items-center justify-between">
            {/* Greeting Section */}
            <div className="flex items-center">
              <button
                className="md:hidden mr-2 text-primary relative z-50"
                onClick={toggleSidebar}
              >
                <IoMdMenu className="text-xl" />
              </button>
              <h1 className="text-lg font-bold text-gray-800">
                Good Morning, Walgreens
              </h1>
            </div>
            {/* Date and Controls */}
            <div className="flex items-center gap-4">
              <p className="text-sm text-gray-600">November 18, 2024</p>
              <div className="flex items-center bg-gray-100 rounded-lg px-3 py-1 shadow cursor-pointer">
                <p className="text-sm text-black">Monthly</p>
                <i className="fas fa-chevron-down ml-2 text-sm text-black"></i>
              </div>
              <div className="relative bg-gray-100 rounded-full p-2 shadow cursor-pointer">
                <i className="fas fa-bell text-black text-lg"></i>
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="flex-1 p-6 min min-h-[calc(100vh-80px)]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
