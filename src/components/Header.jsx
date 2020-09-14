import React from "react";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink to="/" className="navbar-brand">
        Home
      </NavLink>

      <NavLink
        activeClassName="border border-dark border-top-0 border-right-0 border-left-0"
        to="/layout"
        className="navbar-brand"
      >
        Layout
      </NavLink>
    </nav>
  );
};
