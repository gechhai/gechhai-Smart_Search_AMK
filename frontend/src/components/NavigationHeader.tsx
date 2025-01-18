import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../Assets/Images/amk_logo_white.png';
import profileIcon from '../Assets/Images/profile.png'; // Add a profile icon image

export function NavigationHeader() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { name: 'Chat', path: '/' }, // Chat moved to the first position
    { name: 'Upload', path: '/upload' },
    { name: 'Library', path: '/library' },
  ];

  return (
    <nav className="bg-surface p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-12">
        {/* Logo */}
        <Link to="/" className="flex items-center text-white font-bold text-lg">
          <img src={logo} alt="AMK Logo" className="h-16 w-auto mr-2" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium px-3 py-2 rounded ${
                location.pathname === link.path
                  ? 'bg-primary text-white'
                  : 'text-white hover:text-primary hover:bg-white'
              }`} // Changed to text-white
            >
              {link.name}
            </Link>
          ))}
          {/* Profile Icon */}
          <Link to="/profile">
            <img
              src={profileIcon}
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-primary hover:border-white"
            />
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden text-teal-200 hover:text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M4 6h16M4 12h16M4 18h16"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-3 py-2 text-sm font-medium ${
                location.pathname === link.path
                  ? 'bg-primary text-white'
                  : 'text-white hover:text-primary hover:bg-white' // Changed to text-white
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {/* Profile Icon in Mobile */}
          <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
            <img
              src={profileIcon}
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-primary mt-2 mx-auto"
            />
          </Link>
        </div>
      )}
    </nav>
  );
}
