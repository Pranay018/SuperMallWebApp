import express from 'express';
import {
  getShops,
  createShop,
  updateShop,
  deleteShop,
} from '../controllers/shopController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public route
router.get('/', getShops);

// Admin-only routes
router.post('/', protect, adminOnly, createShop);
router.put('/:id', protect, adminOnly, updateShop);
router.delete('/:id', protect, adminOnly, deleteShop);

export default router;