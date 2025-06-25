import React from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const ShopLayout = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* main content area */}
        <main className="flex-1 pt-24 md:pt-6 px-4 bg-[#F0F4F8]">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default ShopLayout;
