import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top "
      style={{ backgroundColor: "#5c5be5" }}
    >
      <div className="container">
        <Link className="navbar-brand text-white" to="/">
          spendWise
        </Link>

        <div className="navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className={`nav-item ${isActiveLink("/") && "active"}`}>
              <Link
                to="/"
                className={`nav-link text-white ${
                  isActiveLink("/") ? "border-bottom border-2" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li className={`nav-item ${isActiveLink("/Features") && "active"}`}>
              <Link
                to="/Features"
                className={`nav-link text-white ${
                  isActiveLink("/Features") ? "border-bottom border-2" : ""
                }`}
              >
                Features
              </Link>
            </li>
            <li className={`nav-item ${isActiveLink("/About-Me") && "active"}`}>
              <Link
                to="/About-Me"
                className={`nav-link text-white ${
                  isActiveLink("/About-Me") ? "border-bottom border-2" : ""
                }`}
              >
                About Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
