import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container justify-content-center">
        <NavLink to="/" className="navbar-brand text-center">
          JobPortalApp
        </NavLink>
      </div>
    </nav>
  );
}
