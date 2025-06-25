import asyncHandler from 'express-async-handler';
import Location from '../models/Location.js';

// @desc    Get all locations (floors, areas, zones)
// @route   GET /api/locations
// @access  Public
const getLocations = asyncHandler(async (req, res) => {
  const locations = await Location.find();
  res.json(locations);
});

// @desc    Create a new location
// @route   POST /api/locations
// @access  Private (Admin only)
const createLocation = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  const locationExists = await Location.findOne({ name });
  if (locationExists) {
    res.status(400);
    throw new Error('Location already exists');
  }

  const location = new Location({
    name,
    description,
  });

  const createdLocation = await location.save();
  res.status(201).json(createdLocation);
});

// @desc    Update a location
// @route   PUT /api/locations/:id
// @access  Private (Admin only)
const updateLocation = asyncHandler(async (req, res) => {
  const { name, description } = req.body;
  const location = await Location.findById(req.params.id);

  if (location) {
    location.name = name || location.name;
    location.description = description || location.description;

    const updatedLocation = await location.save();
    res.json(updatedLocation);
  } else {
    res.status(404);
    throw new Error('Location not found');
  }
});

// @desc    Delete a location
// @route   DELETE /api/locations/:id
// @access  Private (Admin only)
const deleteLocation = asyncHandler(async (req, res) => {
  const location = await Location.findById(req.params.id);

  if (location) {
    await location.deleteOne();
    res.json({ message: 'Location removed' });
  } else {
    res.status(404);
    throw new Error('Location not found');
  }
});

export { getLocations, createLocation, updateLocation, deleteLocation };
