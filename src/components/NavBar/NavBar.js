import React, { useState } from "react";
import { Link, HashRouter as Router } from "react-router-dom"; // If you're using React Router for navigation
import "./NavBar.scss";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  return (
    <Router  basename={process.env.PUBLIC_URL}>
    <nav className="navbar">
      <ul className="navbar__links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    </Router>
  );
};

export default NavBar;
