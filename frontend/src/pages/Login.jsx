import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const API = import.meta.env.VITE_API_BASE_URL;
      const { data } = await axios.post(`${API}/auth/login`, { email, password });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
      style={{
        backgroundImage: "url('/assets/mall2.jpg')", 
      }}
    >
      <div className="bg-white/90 backdrop-blur-md border border-[#D9E2EC] shadow-xl rounded-xl w-full max-w-md p-8 z-10">
        <h2 className="text-3xl font-bold text-center text-[#1A1A40] mb-6">
          🔐 Login to Super Mall
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#1A1A40] mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-[#D9E2EC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1F51FF]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1A1A40] mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-[#D9E2EC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1F51FF]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-900 text-white py-2 rounded-md font-semibold transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-[#1A1A40] mt-4">
          Don’t have an account?{' '}
          <a href="/register" className="text-[#1F51FF] font-medium hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
