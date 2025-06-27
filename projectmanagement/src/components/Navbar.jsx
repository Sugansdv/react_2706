import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4 navbar-expand-lg">
      <span className="navbar-brand">🧩 Project SaaS</span>
      <ul className="navbar-nav ms-auto d-flex flex-row gap-3">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Dashboard</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/teams" className="nav-link">Teams</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/projects" className="nav-link">Projects</NavLink>
        </li>
        {user ? (
          <li className="nav-item">
            <button className="btn btn-sm btn-outline-light" onClick={handleLogout}>Logout</button>
          </li>
        ) : (
          <li className="nav-item">
            <NavLink to="/login" className="nav-link">Login</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
