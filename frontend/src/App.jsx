import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts
import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Offers from './pages/Offers';
import Shops from './pages/Shops';
import Products from './pages/Products';
import Location from './pages/Location';
import NotFound from './pages/NotFound';

// Routes
import ProtectedRoute from './routes/ProtectedRoute';

const App = () => {
  return (
    <Routes>
      {/* 🌐 Public Routes */}
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* 🔐 Protected Admin Layout Routes */}
      <Route
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/products" element={<Products />} />
        <Route path="/locations" element={<Location />} />
      </Route>
    </Routes>
  );
};

export default App;
