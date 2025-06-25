import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/User.js';

// Middleware to protect private routes
const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

// Optional: Middleware to restrict access based on role
const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403);
    throw new Error('Access denied: Admins only');
  }
};

// Optional: Middleware for shop owners
const shopOwnerOnly = (req, res, next) => {
  if (req.user && req.user.role === 'shop-owner') {
    next();
  } else {
    res.status(403);
    throw new Error('Access denied: Shop Owners only');
  }
};

export { protect, adminOnly, shopOwnerOnly };
