import asyncHandler from 'express-async-handler';
import Offer from '../models/Offer.js';

// @desc    Get all offers
// @route   GET /api/offers
// @access  Public
const getOffers = asyncHandler(async (req, res) => {
  const offers = await Offer.find().populate('shop', 'name');
  res.json(offers);
});

// @desc    Create new offer
// @route   POST /api/offers
// @access  Private (Admin/Shop Owner)
const createOffer = asyncHandler(async (req, res) => {
  const { title, description, discount, validTill, shop } = req.body;

  const offer = new Offer({
    title,
    description,
    discount,
    validTill,
    shop,
  });

  const createdOffer = await offer.save();
  res.status(201).json(createdOffer);
});

// @desc    Update an offer
// @route   PUT /api/offers/:id
// @access  Private (Admin/Shop Owner)
const updateOffer = asyncHandler(async (req, res) => {
  const { title, description, discount, validTill } = req.body;

  const offer = await Offer.findById(req.params.id);

  if (offer) {
    offer.title = title || offer.title;
    offer.description = description || offer.description;
    offer.discount = discount || offer.discount;
    offer.validTill = validTill || offer.validTill;

    const updatedOffer = await offer.save();
    res.json(updatedOffer);
  } else {
    res.status(404);
    throw new Error('Offer not found');
  }
});

// @desc    Delete an offer
// @route   DELETE /api/offers/:id
// @access  Private (Admin/Shop Owner)
const deleteOffer = asyncHandler(async (req, res) => {
  const offer = await Offer.findById(req.params.id);

  if (offer) {
    await offer.deleteOne();
    res.json({ message: 'Offer removed' });
  } else {
    res.status(404);
    throw new Error('Offer not found');
  }
});

export { getOffers, createOffer, updateOffer, deleteOffer };