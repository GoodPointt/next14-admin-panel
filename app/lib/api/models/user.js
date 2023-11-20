import { EMAIL_REGEX, PHONE_REGEX } from '@/app/lib/constants';
import mongoose from 'mongoose';

const roles = ['client', 'admin'];
const stasuses = ['active', 'inactive'];

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      match: [EMAIL_REGEX],
      required: [true, 'Email is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
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
      match: [PHONE_REGEX],
    },
    address: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const User = mongoose.models.User || mongoose.model('User', userSchema);
