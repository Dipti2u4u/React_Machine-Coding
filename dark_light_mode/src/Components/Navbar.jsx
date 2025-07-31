import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { useTheme } from "../Contexts/ThemeContext";

const Navbar = () => {
  const { mode, toggleTheme } = useTheme();
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <button className="theme-toggle" onClick={toggleTheme}>
        {mode ? "Light" : "Dark"}
      </button>
    </div>
  );
};
export default Navbar;