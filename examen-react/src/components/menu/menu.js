import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/newpersonaje">
                Insertar Personaje
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/update">
                Modificar Personaje
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
