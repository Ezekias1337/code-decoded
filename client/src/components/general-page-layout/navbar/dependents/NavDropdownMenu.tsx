// Library Imports
import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

type DropdownMenuProps = {
  linkText: string;
  dropdownItems: { text: string; url: string }[];
};

const NavDropdownMenu: React.FC<DropdownMenuProps> = ({
  linkText,
  dropdownItems,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="dropdown-menu-wrapper position-relative"
      onClick={handleToggle}
      /* onTouchStart={handleToggle} */
    >
      <div className="nav-link-wrapper">
        <div className="nav-link full-flex">
          {linkText}{" "}
          <FontAwesomeIcon
            icon={isOpen === false ? faChevronDown : faChevronUp}
            size="sm"
            key={`${name}-menu-arrow`}
          />
        </div>
        <div className="nav-link-underline"></div>
      </div>

      <div
        className={`dropdown-content${isOpen ? "-open" : ""} full-flex flex-direction-column  position-absolute`}
      >
        {dropdownItems.map((item, index) => (
          <>
            <Link
              key={index}
              to={item.url}
              className="dropdown-item padding-left-20 padding-right-20"
              onClick={handleClose}
            >
              {item.text}
            </Link>
            {index !== dropdownItems.length - 1 && (
              <hr className="dropdown-item-underline" />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default NavDropdownMenu;
