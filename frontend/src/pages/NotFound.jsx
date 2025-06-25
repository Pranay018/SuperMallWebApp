import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-10"
      style={{ backgroundImage: "url('/assets/mall3.avif')" }}
    >
      <div className="bg-[#fffaf0] border border-[#f1e7d0] shadow-xl rounded-2xl max-w-lg w-full text-center p-8 backdrop-blur-md">
        <h1 className="text-7xl font-bold text-[#1F51FF] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[#1A1A40] mb-3">Page Not Found</h2>
        <p className="text-[#4B5563] mb-6 text-sm">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block bg-[#f7c35f] hover:bg-[#fbbf24] text-[#1A1A40] font-semibold py-2 px-6 rounded-md transition"
        >
          🏠 Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
