import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar glass-panel">
      <div className="container navbar-inner">
        <Link to="/" className="brand">
          Student Team Members
        </Link>
        <nav className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/add" className="nav-link">
            Add Member
          </NavLink>
          <NavLink to="/members" className="nav-link">
            View Members
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
