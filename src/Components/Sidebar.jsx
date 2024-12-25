import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/images/cc_logo.png";

import homeIcon from "../assets/svg/sidebar/home.svg";
import salesIcon from "../assets/svg/sidebar/sales.svg";
import ordersIcon from "../assets/svg/sidebar/orders.svg";
import customerIcon from "../assets/svg/sidebar/customer.svg";
import packagesIcon from "../assets/svg/sidebar/packages.svg";
import inventoryIcon from "../assets/svg/sidebar/inventory.svg";
import servicesIcon from "../assets/svg/sidebar/services.svg";
import promotionsIcon from "../assets/svg/sidebar/promotions.svg";
import supportIcon from "../assets/svg/sidebar/support.svg";
import reviewsIcon from "../assets/svg/sidebar/reviews.svg";
import reportsIcon from "../assets/svg/sidebar/reports.svg";
import profileIcon from "../assets/svg/sidebar/profile.svg";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const [activeItem, setActiveItem] = useState("/app");
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", icon: homeIcon, path: "/app" },
    { name: "Sales", icon: salesIcon, path: "sales" },
    { name: "Orders", icon: ordersIcon, path: "orders" },
    { name: "Customer", icon: customerIcon, path: "customer" },
    { name: "Packages", icon: packagesIcon },
    { name: "Inventory", icon: inventoryIcon },
    // { name: "Services", icon: servicesIcon },
    // { name: "Promotions", icon: promotionsIcon },
    // { name: "Support", icon: supportIcon },
    // { name: "Reviews", icon: reviewsIcon },
    // { name: "Reports", icon: reportsIcon },
    // { name: "Profile", icon: profileIcon, path:"profile" },
  ];

  const handleClickOutside = (event) => {
    if (
      !event.target.closest(".profile-popup") &&
      !event.target.closest(".footer-section")
    ) {
      setShowProfileMenu(false);
    }
  };

  useEffect(() => {
    if (showProfileMenu) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showProfileMenu]);

  return (
    <div
      className={`h-screen top-0 left-0 fixed z-50 md:static bg-[#3b65ff] text-white flex flex-col transition-all duration-300 m-0 p-0 ${
        isCollapsed
          ? "w-0 -translate-x-full md:translate-x-0 md:w-16"
          : "w-[95%] md:w-64"
      }`}
    >
      {/* Toggle Icon */}
      <div
        className="hidden absolute top-5 -right-4 bg-[#3b65ff] text-white rounded-full w-8 h-8 md:flex items-center justify-center cursor-pointer shadow-lg hover:bg-gray-400"
        onClick={toggleSidebar}
      >
        <i
          className={`fas ${
            isCollapsed ? "fa-chevron-right" : "fa-chevron-left"
          }`}
        ></i>
      </div>

      {/* Side bar close button for mobile */}
      <button
        className={`md:hidden absolute right-2 top-2 text-white ${
          isCollapsed ? "hidden" : "inline-block"
        }`}
        onClick={toggleSidebar}
      >
        <IoMdClose className="text-2xl" />
      </button>

      {/* Header Section */}
      <div className={`flex items-center p-4 ${isCollapsed ? "mb-2" : "mb-6"}`}>
        <div
          className={`flex items-center ${
            isCollapsed ? "justify-center" : "gap-2"
          }`}
        >
          <img src={logo} alt="Logo" className="h-8" />
          {!isCollapsed && <h1 className="text-xl font-bold">ChangeCollect</h1>}
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 overflow-y-auto">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setActiveItem(item.path);
              navigate(item.path);
            }}
            className={`flex items-center p-3 mx-2 rounded-lg cursor-pointer transition-colors duration-300 ${
              activeItem === item.path
                ? " text-white"
                : "hover:bg-traparent text-gray-400"
            } ${isCollapsed ? "justify-center" : ""}`}
            title={item.name}
          >
            <img
              src={item.icon}
              alt={`${item.name} Icon`}
              className={`h-5 w-5 ${
                activeItem === item.path ? "text-white" : "text-gray-400"
              }`}
            />
            {!isCollapsed && (
              <span
                className={`ml-3 text-sm ${
                  activeItem === item.path ? "text-white" : "text-gray-400"
                }`}
              >
                {item.name}
              </span>
            )}
            {!isCollapsed && (
              <i className="fas fa-chevron-right ml-auto ${activeItem === item.name ? 'text-white' : 'text-gray-400'}"></i>
            )}
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="relative footer-section bg-darkGreen">
        <div
          className={`hidden md:flex items-center gap-2 px-2 py-1 rounded-full border border-white transition-all duration-300 m-3 cursor-pointer ${
            isCollapsed ? "justify-center" : ""
          }`}
          onClick={() => setShowProfileMenu(!showProfileMenu)}
        >
          {/* Profile Picture */}
          <img
            src="https://placehold.co/40"
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />

          {/* Profile Name and Role */}
          {!isCollapsed && (
            <div className="flex-1">
              <p className="text-sm font-semibold text-white">John Doe</p>
              <p className="text-[10px] text-gray-400">Super Admin</p>
            </div>
          )}

          {/* Chevron Icon */}
          {!isCollapsed && (
            <i
              className={`fas fa-chevron-down text-white transition-transform ${
                showProfileMenu ? "rotate-180" : ""
              }`}
            ></i>
          )}
        </div>

        {/* Profile Menu Popup */}
        {showProfileMenu && (
          <div
            className="absolute bottom-16 left-1/2 transform -translate-x-1/2
                   bg-white text-black rounded-lg shadow-lg overflow-hidden cursor-pointer w-[230px]"
          >
            <div className="flex flex-col">
              {/* View Profile */}
              <div
                className="flex items-center gap-2 p-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => navigate("profile")}
              >
                <i className="fas fa-user text-black"></i>
                <p className="text-sm">View Profile</p>
              </div>
              {/* Divider */}
              <div className="border-t border-gray-300"></div>
              {/* Sign Out */}
              <div
                className="flex items-center gap-2 p-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => navigate("/")}
              >
                <i className="fas fa-sign-out-alt text-black"></i>
                <p className="text-sm">Sign Out</p>
              </div>
            </div>
          </div>
        )}
        <div className="md:hidden flex flex-col gap-3">
          <div
            className="flex items-center gap-2 p-3 hover:opacity-85 cursor-pointer"
            onClick={() => navigate("profile")}
            title="Profile"
          >
            <i className="fas fa-user"></i>
            <p className={`${isCollapsed ? "hidden" : "inline-block"}`}>
              View Profile
            </p>
          </div>
          <div
            className="flex items-center gap-2 p-3 hover:opacity-85 cursor-pointer"
            onClick={() => navigate("/")}
            title="Sign Out"
          >
            <i className="fas fa-sign-out-alt"></i>
            <p className={`${isCollapsed ? "hidden" : "inline-block"}`}>
              Sign Out
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
