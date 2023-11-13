import mongoose from 'mongoose';

const categories = ['computer', 'kitchen', 'phone'];

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    cat: {
      type: String,
      enum: categories,
      default: 'computer',
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    img: {
      type: String,
    },

    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema);
