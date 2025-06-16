import React from "react";
import { NavLink } from "react-router-dom";
import "../styles.css"

const Navbar = () => {
  return (
    <div className="tab-bar">
      <NavLink
        to="/profile"
        className={({ isActive }) => `tab ${isActive ? "active" : ""}`}
      >
        Profile
      </NavLink>
      <NavLink
        to="/interest"
        className={({ isActive }) => `tab ${isActive ? "active" : ""}`}
      >
        Interest
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) => `tab ${isActive ? "active" : ""}`}
      >
        Settings
      </NavLink>
    </div>
  );
};

export default Navbar;
