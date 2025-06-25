import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const backgroundImage =
    "url('https://media.istockphoto.com/id/941334842/vector/modern-retail-store-with-many-shops-and-supermarket-empty-interior-no-people.jpg?s=612x612&w=0&k=20&c=lZOvr3QKZ6rfPGYc4kKFIlWOopVOPLOXIY1IvzLf5O4=')";

  const navItems = [
    { path: '/shops', label: '🏪 Browse Shops' },
    { path: '/offers', label: '🎉 View Offers' },
    { path: '/products', label: '🛒 Explore Products' },
    { path: '/locations', label: '📍 View Locations' },
  ];

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1A1A40]/60"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl w-full bg-white/90 rounded-xl border border-[#D9E2EC] shadow-lg p-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A40] mb-2">
            Welcome to Super Mall 🏬
          </h1>
          <p className="text-[#1F51FF] text-lg font-medium">
            Discover shops, offers, products & more — all in one place.
          </p>
        </header>

        {/* CTA Links */}
        <div className="grid gap-4 sm:grid-cols-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="bg-yellow-400 hover:bg-yellow-500 text-[#1A1A40] text-center py-3 px-5 rounded-md font-semibold shadow transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
              aria-label={item.label}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <footer className="text-center text-sm text-[#1A1A40] mt-8">
          © {new Date().getFullYear()} Super Mall. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Home;
