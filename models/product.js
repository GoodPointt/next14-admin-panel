import mongoose from 'mongoose';

const categories = ['computer', 'kitchen', 'phone'];

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      unique: true,
    },
    desc: {
      type: String,
      required: [true, 'Description is required'],
    },
    cat: {
      type: String,
      enum: categories,
      default: 'computer',
      required: [true, 'Category is required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: 0,
    },
    stock: {
      type: Number,
      required: [true, 'Stock is required'],
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
    versionKey: false,
    timestamps: true,
  }
);

export const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema);
