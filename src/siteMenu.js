import React from 'react';
import { NavLink } from "react-router-dom";


const siteMenu = () => {
  return (
    <nav className="topmenu" id="topmenu">
      <ul className="nav">
        {/* <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li> */}
        <li>
          <NavLink activeClassName="active" to="/recipes">
            Recipes
          </NavLink>
        </li>
        <li className="nav-logout">
          <NavLink to="/">
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default siteMenu;