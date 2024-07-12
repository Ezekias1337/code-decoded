// Library Imports
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";
//Context
import { useAuth } from "../../../context/AuthContext";
// Functions, Helpers, Utils, and Hooks
import useWindowWidth from "../../../hooks/useWindowWidth";
import { isAuthenticated } from "../../../authentication/authState";
import logout from "../../../functions/network/logout";
// Components
import AnimatedNavLink from "./dependents/AnimatedNavLink";
import NavDropdownMenu from "./dependents/NavDropdownMenu";
// CSS
import "./navbar.scss";
// Assets and Images
import logo from "/assets/images/logo/logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const windowWidth = useWindowWidth();
  const location = useLocation();
  const navigate = useNavigate();

  const userAuthenticated = isAuthenticated();
  const { dispatch } = useAuth();

  const listOfUrlsToUseGlassmorphicVariant = ["/", "/login"];
  let variant: string;

  if (listOfUrlsToUseGlassmorphicVariant.includes(location.pathname)) {
    variant = "glassmorphic";
  } else {
    variant = "default";
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    await logout();
    dispatch({ type: "SET_USER", payload: null });
    navigate({ to: "/login", replace: true });
  };

  return (
    <nav
      className={`navbar ${variant}-navbar full-flex padding-left-80 padding-right-80 padding-top-40 padding-bottom-40`}
    >
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
            <AnimatedNavLink linkText="Home" url="/" />
          </li>
          <li>
            <NavDropdownMenu
              linkText="Info"
              dropdownItems={[
                {
                  text: "About Us",
                  url: "/about-us",
                },
                {
                  text: "FAQ",
                  url: "/faqs",
                },
              ]}
            />
          </li>
          <li>
            {userAuthenticated ? (
              <NavDropdownMenu
                linkText="Account"
                dropdownItems={[
                  {
                    text: "Profile",
                    url: "/profile",
                  },
                  {
                    text: "Logout",
                    onClick: handleLogout,
                  },
                ]}
              />
            ) : (
              <AnimatedNavLink linkText="Login" url="/login" />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
