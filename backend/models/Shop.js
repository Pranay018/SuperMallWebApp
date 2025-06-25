import mongoose from 'mongoose';

const shopSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    location: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Location',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Shop = mongoose.model('Shop', shopSchema);

export default Shop;
