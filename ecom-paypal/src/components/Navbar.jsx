import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link to="/" className="navbar-brand">🛒 EcomStore</Link>
      <div className="d-flex">
        <Link to="/" className="btn btn-outline-light me-2">Home</Link>
        <Link to="/cart" className="btn btn-outline-light">Cart</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
