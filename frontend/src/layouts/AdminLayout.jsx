import React from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Push down main content below mobile header */}
        <main className="flex-1 p-4 md:pt-6 pt-20 bg-[#F0F4F8]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
