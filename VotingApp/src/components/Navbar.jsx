import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
    <NavLink className="navbar-brand" to="/">🗳️ Polling App</NavLink>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Polls</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
