import mongoose from 'mongoose';

const offerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    discount: {
      type: Number,
      required: true,
    },
    validTill: {
      type: Date,
      required: true,
    },
    shop: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Shop',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Offer = mongoose.model('Offer', offerSchema);

export default Offer;
