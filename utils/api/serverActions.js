'use server';
import { User } from '@/models/user';
import { connectToDB } from './db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Product } from '@/models/product';

export const addUser = async (formData) => {
  const { username, email, password, phone, role, status } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const isExist = await User.findOne({ email });

    if (isExist) {
      return { error: `User with email "${email}" already exist` };
    }

    const newUser = new User({
      username,
      email,
      password,
      phone,
      role,
      status,
    });

    await newUser.save();
  } catch (error) {
    console.log(error);
    return { error: 'Failed to create user' };
  }

  revalidatePath('/dashboard/users');
  redirect('/dashboard/users');
};

export const addProduct = async (formData) => {
  const { title, desc, cat, price, stock, img, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const isExist = await Product.findOne({ title });

    if (isExist) {
      return { error: `Product with title "${title}" already exist` };
    }

    const newProduct = new Product({
      title,
      desc,
      cat,
      price,
      stock,
      img,
      color,
      size,
    });

    await newProduct.save();
  } catch (error) {
    console.log(error);
    return { error: 'Failed to create product' };
  }

  revalidatePath('/dashboard/products');
  redirect('/dashboard/products');
};
