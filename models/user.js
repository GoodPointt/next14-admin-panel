import mongoose from 'mongoose';

const roles = ['client', 'admin'];
const stasuses = ['active', 'inactive'];

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    role: {
      type: String,
      enum: roles,
      default: 'client',
    },
    status: {
      type: String,
      enum: stasuses,
      default: 'active',
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.models.User || mongoose.model('User', userSchema);
