import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import colors from 'colors';

import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import { logRequests } from './middleware/loggerMiddleware.js';

import authRoutes from './routes/authRoutes.js';
import shopRoutes from './routes/shopRoutes.js';
import productRoutes from './routes/productRoutes.js';
import offerRoutes from './routes/offerRoutes.js';
import locationRoutes from './routes/locationRoutes.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize app
const app = express();

// Allowed origins for CORS
const allowedOrigins = [
  'http://localhost:5173', // local frontend dev
  'https://supermallwebappbypranay.netlify.app', // deployed Netlify frontend
];

// CORS middleware
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('CORS policy blocked this origin: ' + origin));
      }
    },
    credentials: true,
  })
);

// Middleware
app.use(express.json()); // to parse JSON request bodies
app.use(logRequests);    // custom logging middleware

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/shops', shopRoutes);
app.use('/api/products', productRoutes);
app.use('/api/offers', offerRoutes);
app.use('/api/locations', locationRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Server listen
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () =>
    console.log(`✅ Server running on port ${PORT}`.yellow.bold)
  );
}

export default app;
