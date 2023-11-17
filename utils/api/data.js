import { User } from '@/models/user';
import { connectToDB } from './db';
import { Product } from '@/models/product';

export const fetchUsers = async (query, page) => {
  const regex = new RegExp(query, 'i');

  try {
    connectToDB();
    const count = await User.find({
      $or: [{ username: { $regex: regex } }, { email: { $regex: regex } }],
    }).count();

    const limit = process.env.NEXT_PUBLIC_LIMIT;

    const users = await User.find({
      $or: [{ username: { $regex: regex } }, { email: { $regex: regex } }],
    })
      .limit(limit)
      .skip(limit * (page - 1));

    return { users, count };
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch users');
  }
};

export const fetchUser = async (id) => {
  try {
    connectToDB();
    const user = await User.findById(id);

    return user;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch user');
  }
};

export const fetchProducts = async (query, page) => {
  const regex = new RegExp(query, 'i');

  try {
    connectToDB();
    const count = await Product.find({
      $or: [{ title: { $regex: regex } }, { email: { $regex: regex } }],
    }).count();

    const limit = process.env.NEXT_PUBLIC_LIMIT;

    const products = await Product.find({
      $or: [{ title: { $regex: regex } }, { desc: { $regex: regex } }],
    })
      .limit(limit)
      .skip(limit * (page - 1));

    return { products, count };
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch products');
  }
};

export const fetchProduct = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id);

    return product;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch product');
  }
};
