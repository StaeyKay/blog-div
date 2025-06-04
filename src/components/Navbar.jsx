import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 px-16 bg-gray-100 shadow-md">
      <h1 className="text-2xl font-bold mb-4">My Blog</h1>
      <nav >
        <ul className="flex space-x-4 text-xl">
          <li>
            <NavLink to="/">
              {({ isActive }) => (
                <span className={isActive ? "text-red-700" : ""}>Home</span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog">
              {({ isActive }) => (
                <span className={isActive ? "text-red-700" : ""}>Blog</span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-new">
              {({ isActive }) => (
                <span className={isActive ? "text-red-700" : ""}>Add New</span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
