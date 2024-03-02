import React, { useState } from "react";
import { Link } from "react-router-dom"; // If you're using React Router for navigation
import "./NavBar.scss";
import { motion } from "framer-motion";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  return (
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
  );
};

export default NavBar;
