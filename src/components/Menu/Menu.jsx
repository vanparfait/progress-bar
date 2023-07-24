//className={({isActive}) => (isActive ? 'active' : undefined)}
import React from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li>
          <NavLink activeclassname="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeclassname="active" to="./add">
            Add Techno
          </NavLink>{" "}
        </li>
        <li>
          <NavLink activeclassname="active" to="all">
            All Techno
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
