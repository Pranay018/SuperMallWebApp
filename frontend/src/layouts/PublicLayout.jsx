import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F0F4F8]">
      {/* Fixed Navbar, push content down on mobile */}
      <Navbar />
      
      {/* Main content: add top padding to avoid nav overlap */}
      <main className="flex-1 pt-24 md:pt-6 px-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default PublicLayout;
