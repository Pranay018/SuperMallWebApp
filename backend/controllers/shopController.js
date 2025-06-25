import asyncHandler from 'express-async-handler';
import Shop from '../models/Shop.js';

// @desc    Get all shops
// @route   GET /api/shops
// @access  Public
const getShops = asyncHandler(async (req, res) => {
  const shops = await Shop.find().populate('location', 'name');
  res.json(shops);
});

// @desc    Create a new shop
// @route   POST /api/shops
// @access  Private (Admin only)
const createShop = asyncHandler(async (req, res) => {
  const { name, category, owner, location } = req.body;

  const shopExists = await Shop.findOne({ name });
  if (shopExists) {
    res.status(400);
    throw new Error('Shop already exists');
  }

  const shop = new Shop({
    name,
    category,
    owner,
    location,
  });

  const createdShop = await shop.save();
  res.status(201).json(createdShop);
});

// @desc    Update a shop
// @route   PUT /api/shops/:id
// @access  Private (Admin only)
const updateShop = asyncHandler(async (req, res) => {
  const { name, category, owner, location } = req.body;
  const shop = await Shop.findById(req.params.id);

  if (shop) {
    shop.name = name || shop.name;
    shop.category = category || shop.category;
    shop.owner = owner || shop.owner;
    shop.location = location || shop.location;

    const updatedShop = await shop.save();
    res.json(updatedShop);
  } else {
    res.status(404);
    throw new Error('Shop not found');
  }
});

// @desc    Delete a shop
// @route   DELETE /api/shops/:id
// @access  Private (Admin only)
const deleteShop = asyncHandler(async (req, res) => {
  const shop = await Shop.findById(req.params.id);

  if (shop) {
    await shop.deleteOne();
    res.json({ message: 'Shop removed' });
  } else {
    res.status(404);
    throw new Error('Shop not found');
  }
});

export { getShops, createShop, updateShop, deleteShop };
