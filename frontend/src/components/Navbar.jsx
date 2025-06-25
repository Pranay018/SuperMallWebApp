import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { to: '/shops', label: '🏪 Shops' },
    { to: '/offers', label: '🎉 Offers' },
    { to: '/products', label: '🛍️ Products' },
    { to: '/locations', label: '📍 Locations' },
    { to: '/dashboard', label: '📊 Dashboard' },
  ];

  return (
    <nav className="bg-yellow-400 text-[#1A1A40] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-[#1A1A40]">
          Super Mall
        </Link>

        {/* Hamburger Button */}
        <button
          className="text-3xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✖' : '☰'}
        </button>

        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex gap-6 font-medium items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-lg px-5 py-2 rounded-md text-center min-w-[130px] transition hover:bg-[#F0F4F8] hover:text-[#1F51FF] ${
                  isActive ? 'font-bold bg-white text-[#1F51FF]' : ''
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* Auth Buttons */}
          <Link
            to="/login"
            className="bg-black hover:bg-gray-800 text-white px-5 py-2 rounded-md transition text-center min-w-[110px]"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md transition text-center min-w-[110px]"
          >
            Register
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-lg px-4 py-2 rounded-md transition hover:bg-[#F0F4F8] hover:text-[#1F51FF] ${
                  isActive ? 'font-bold bg-white text-[#1F51FF]' : ''
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="bg-black text-white px-4 py-2 rounded-md text-center"
          >
            Login
          </Link>
          <Link
            to="/register"
            onClick={() => setMenuOpen(false)}
            className="bg-green-600 text-white px-4 py-2 rounded-md text-center"
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
