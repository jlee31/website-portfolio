import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  // State to control mobile menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Get current location to highlight active navigation item
  const location = useLocation();

  // Define all navigation items - easy to add/remove/modify
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/blog', label: 'Blog' }
  ];

  // Toggle mobile menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo - links back to home page */}
        <Link to="/" className="logo">
          <span className="logo-text">Joseph Lee</span>
        </Link>
        
        {/* Desktop Navigation - visible on larger screens */}
        <nav className="nav-desktop">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              // Add 'active' class if current page matches this link
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button - only visible on small screens */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {/* Show X icon when menu is open, hamburger when closed */}
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation - slides down when menu button is clicked */}
        {isMenuOpen && (
          <nav className="nav-mobile">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                // Close mobile menu when a link is clicked
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
