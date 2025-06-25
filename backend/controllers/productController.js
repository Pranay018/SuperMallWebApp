import asyncHandler from 'express-async-handler';
import Product from '../models/Product.js';

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find().populate('shop', 'name');
  res.json(products);
});

// @desc    Create new product
// @route   POST /api/products
// @access  Private (Admin/Shop Owner)
const createProduct = asyncHandler(async (req, res) => {
  const { name, description, price, category, shop, stock } = req.body;

  const product = new Product({
    name,
    description,
    price,
    category,
    shop,
    stock,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private (Admin/Shop Owner)
const updateProduct = asyncHandler(async (req, res) => {
  const { name, description, price, category, stock } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.category = category || product.category;
    product.stock = stock || product.stock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private (Admin/Shop Owner)
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.deleteOne();
    res.json({ message: 'Product removed' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

export { getProducts, createProduct, updateProduct, deleteProduct };
