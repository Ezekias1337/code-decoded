// Library Imports
import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
// Functions, Helpers, Utils, and Hooks
import useWindowWidth from "../../../hooks/useWindowWidth";
// Components
import { AnimatedNavLink } from "./dependents/AnimatedNavLink";
// CSS
import "./navbar.scss";
// Assets and Images
import logo from "../../../../public/assets/images/logo/logo.png";

interface NavbarProps {
  variant: "default" | "glassmorphic";
}

const Navbar: React.FC<NavbarProps> = ({ variant }) => {
  const [isOpen, setIsOpen] = useState(false);
  const windowWidth = useWindowWidth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${variant}-navbar full-flex padding-left-80 padding-right-80 padding-top-40 padding-bottom-40`}>
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
        {windowWidth <= 768 && (
          <button className="navbar-toggle" onClick={toggleMenu}>
            <span className="navbar-toggle-icon">&#9776;</span>
          </button>
        )}
      </div>
      <div className={`navbar-menu${isOpen ? " navbar-menu-open" : ""}`}>
        <ul className="space-around-flex align-items-center">
          <li>
            <AnimatedNavLink linkText="Página Principal" url="/" />
          </li>
          <li>
            <AnimatedNavLink linkText="Iniciar Sesión" url="/login" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
