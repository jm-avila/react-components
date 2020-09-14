import React from "react";
import { NavLink } from "react-router-dom";

export default () => {
  const activeClassName =
    "border border-dark border-top-0 border-right-0 border-left-0";
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink
        activeClassName={activeClassName}
        to="/"
        exact
        className="navbar-brand"
      >
        Home
      </NavLink>

      <NavLink
        activeClassName={activeClassName}
        to="/layout"
        className="navbar-brand"
      >
        Layout
      </NavLink>
    </nav>
  );
};
