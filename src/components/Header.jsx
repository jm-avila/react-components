import React from "react";
import { NavLink } from "react-router-dom";

export default () => {
  const activeClassName =
    "border border-dark border-top-0 border-right-0 border-left-0";
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
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
        to="/calculator"
        className="navbar-brand"
      >
        Calculator
      </NavLink>

      <NavLink
        activeClassName={activeClassName}
        to="/counter"
        className="navbar-brand"
      >
        Counter
      </NavLink>

      <NavLink
        activeClassName={activeClassName}
        to="/mr-sparkle"
        className="navbar-brand"
      >
        Mr Sparkle
      </NavLink>
    </nav>
  );
};
