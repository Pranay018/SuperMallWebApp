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

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logRequests); // Custom logging middleware

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/shops', shopRoutes);
app.use('/api/products', productRoutes);
app.use('/api/offers', offerRoutes);
app.use('/api/locations', locationRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

// Export app for testing
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () =>
    console.log(`✅ Server running on port ${PORT}`.yellow.bold)
  );
}

export default app;
