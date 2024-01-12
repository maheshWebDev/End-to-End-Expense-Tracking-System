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
            <li className={`nav-item ${isActiveLink("/Login") && "active"}`}>
              <Link
                to="/Login"
                className={`nav-link text-white ${
                  isActiveLink("/Login") ? "border-bottom border-2" : ""
                }`}
              >
                Login
              </Link>
            </li>
            <li className={`nav-item ${isActiveLink("/Sign-up") && "active"}`}>
              <Link
                to="/Sign-up"
                className={`nav-link text-white ${
                  isActiveLink("/Sign-up") ? "border-bottom border-2" : ""
                }`}
              >
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
