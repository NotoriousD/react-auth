import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const handleClick = (e) => {
    const toggleLink = document.querySelectorAll(".toggle-menu");
    toggleLink.forEach((item) => {
      if (item.classList.contains("active-toggle")) {
        item.classList.remove("active-toggle");
      }
    });
    e.target.parentNode.classList.toggle("active-toggle");
  };
  return (
    <div className="menu-container">
      <nav className="main-navbar">
        <ul className="main-menu">
          {/* <span className="menu-tab__title">Performance</span> */}
          <li className="toggle-menu" onClick={handleClick}>
            <span className="menu-item__title">Dashboard</span>
            <NavLink
              exact={true}
              activeClassName="is-active"
              className="nav-link"
              to="/admin/overview"
            >
              Overview
            </NavLink>
          </li>
          <li className="toggle-menu" onClick={handleClick}>
            <span className="menu-item__title">Reports</span>
            <NavLink
              activeClassName="is-active"
              className="nav-link"
              to="/admin/dynamic_variable"
            >
              DynamicVariables
            </NavLink>
            <NavLink
              activeClassName="is-active"
              className="nav-link"
              to="/admin/daily"
            >
              Daily
            </NavLink>
          </li>
          <span className="menu-item__title">Manage</span>
          <li>
            <NavLink
              activeClassName="is-active"
              className="nav-link"
              to="/admin/compaigns"
            >
              Links
            </NavLink>
            <NavLink
              activeClassName="is-active"
              className="nav-link"
              to="/admin/assets"
            >
              Assets
            </NavLink>
            <NavLink
              activeClassName="is-active"
              className="nav-link"
              to="/admin/reports"
            >
              API Reports
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
