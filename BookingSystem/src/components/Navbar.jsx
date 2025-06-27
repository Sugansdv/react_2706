import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
    <NavLink className="navbar-brand" to="/">🗓️ Booking System</NavLink>
    
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/appointments">Appointments</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/book">Book Now</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/my-bookings">My Bookings</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
