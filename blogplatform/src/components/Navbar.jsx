import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
    <span className="navbar-brand">📝 Blog Platform</span>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item me-3">
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item me-5">
          <NavLink to="/create" className="nav-link">Create Post</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
