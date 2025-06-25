import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/dashboard', label: 'Dashboard', icon: '📊' },
  { to: '/shops', label: 'Shops', icon: '🏪' },
  { to: '/offers', label: 'Offers', icon: '🎉' },
  { to: '/products', label: 'Products', icon: '🛍️' },
  { to: '/locations', label: 'Locations', icon: '📍' },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 🔶 Mobile Navbar */}
      <div className="md:hidden bg-yellow-400 flex justify-between items-center px-4 py-3 shadow-md fixed top-0 left-0 w-full z-50">
        <h1 className="font-bold text-xl text-[#1A1A40]">Super Mall</h1>
        <button onClick={() => setOpen(!open)} className="text-2xl text-[#1A1A40]">
          {open ? '❌' : '☰'}
        </button>
      </div>

      {/* 🔷 Sidebar Panel */}
      <aside
        className={`bg-[#1A1A40] text-white w-64 fixed md:static top-0 left-0 h-full z-50 p-6 transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:block`}
      >
        <div className="text-2xl font-bold text-[#7EC8E3] mb-10 hidden md:block">Super Mall</div>

        <nav className="flex flex-col gap-4">
          {links.map((link) => (
            <NavLink
              to={link.to}
              key={link.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition ${
                  isActive ? 'bg-[#1F51FF]' : 'hover:bg-[#2B2B60]'
                }`
              }
              onClick={() => setOpen(false)} 
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* 🌓 Mobile Backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
        />
      )}
    </>
  );
};

export default Sidebar;

