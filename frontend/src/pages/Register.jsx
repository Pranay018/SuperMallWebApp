import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'shop-owner',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const { data } = await axios.post('/api/auth/register', formData);
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{
       backgroundImage: "url('/assets/mall1.jpg')",
      }}
    >
      <div className="bg-white/90 backdrop-blur-md border border-[#D9E2EC] shadow-xl rounded-xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-[#1A1A40] mb-6">
          📝 Create Account
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#1A1A40] mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#D9E2EC] rounded-md focus:ring-2 focus:ring-[#1F51FF]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1A1A40] mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#D9E2EC] rounded-md focus:ring-2 focus:ring-[#1F51FF]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1A1A40] mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#D9E2EC] rounded-md focus:ring-2 focus:ring-[#1F51FF]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1A1A40] mb-1">
              Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#D9E2EC] rounded-md focus:ring-2 focus:ring-[#1F51FF]"
            >
              <option value="shop-owner">Shop Owner</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-semibold transition"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center text-[#1A1A40] mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-[#1F51FF] font-medium hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
