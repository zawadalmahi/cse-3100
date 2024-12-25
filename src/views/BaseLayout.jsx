import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      {/* Header Section */}
      <header className="d-flex align-items-center bg-light">
        {/* Logo and Home Link */}
        <h1>
          <Link className="text-decoration-none text-dark" to="/">
            Purrfect Adoption
          </Link>
        </h1>
        {/* Spacer to push navigation to the right */}
        <div className="flex-grow-1"></div>
        {/* Navigation Links */}
        <nav>
          <ul className="nav">
            {/* Link to Available Cats Page */}
            <li className="nav-item">
              <Link className="nav-link" to="/available-cats">
                Available Cats
              </Link>
            </li>
            {/* Link to Contact Us Page */}
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">
                Contact Us
              </Link>
            </li>
            {/* Link to About Us Page */}
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content Area */}
      <main id="content">
        <Outlet />
      </main>

      {/* Footer Section */}
      <footer className="bg-light">
        <p>© Copyright 2024</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
