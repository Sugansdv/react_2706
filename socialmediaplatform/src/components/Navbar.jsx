import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-dark bg-dark px-4 navbar-expand-lg">
      <span className="navbar-brand">🌐 SocialApp</span>
      <ul className="navbar-nav ms-auto d-flex flex-row gap-3">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Feed</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/friends" className="nav-link">Friends</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/chat" className="nav-link">Chat</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/profile" className="nav-link">Profile</NavLink>
        </li>
        {user ? (
          <li className="nav-item">
            <button className="btn btn-sm btn-outline-light" onClick={() => { logout(); navigate('/login'); }}>Logout</button>
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