import express from 'express';
import {
  getOffers,
  createOffer,
  updateOffer,
  deleteOffer,
} from '../controllers/offerController.js';
import { protect, adminOnly, shopOwnerOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public route
router.get('/', getOffers);

// Protected routes for Admin and Shop Owner
router.post('/', protect, createOffer);
router.put('/:id', protect, updateOffer);
router.delete('/:id', protect, deleteOffer);

export default router;
