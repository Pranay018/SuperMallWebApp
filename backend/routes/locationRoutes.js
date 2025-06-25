import express from 'express';
import {
  getLocations,
  createLocation,
  updateLocation,
  deleteLocation,
} from '../controllers/locationController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public route
router.get('/', getLocations);

// Protected admin-only routes
router.post('/', protect, adminOnly, createLocation);
router.put('/:id', protect, adminOnly, updateLocation);
router.delete('/:id', protect, adminOnly, deleteLocation);

export default router;