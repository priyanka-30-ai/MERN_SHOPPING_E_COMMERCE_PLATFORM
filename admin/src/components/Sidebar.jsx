import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-2 bg-white px-4 py-6">
      <div className="flex flex-col gap-5">
        
        <NavLink
          to="/add"
          className="flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-xl bg-gray-100 hover:bg-gray-200 transition"
        >
          <img className="w-6 h-6" src={assets.add_icon} alt="Add Items" />
          <p className="hidden md:block text-lg font-semibold">Add Items</p>
        </NavLink>

        <NavLink
          to="/list"
          className="flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-xl bg-gray-100 hover:bg-gray-200 transition"
        >
          <img className="w-6 h-6" src={assets.parcel_icon} alt="List Items" />
          <p className="hidden md:block text-lg font-semibold">List Items</p>
        </NavLink>

        <NavLink
          to="/orders"
          className="flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-xl bg-gray-100 hover:bg-gray-200 transition"
        >
          <img className="w-6 h-6" src={assets.order_icon} alt="View Orders" />
          <p className="hidden md:block text-lg font-semibold">View Orders</p>
        </NavLink>

      </div>
    </div>
  );
};

export default Sidebar;
