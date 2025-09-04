import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/statistics" className="nav-link">Statistics</Link>
    </nav>
  );
}

export default Navbar;
