'use server';
import { User } from '@/app/utils/api/models/user';
import { connectToDB } from './db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Product } from '@/app/utils/api/models/product';
import bcrypt from 'bcrypt';
import { signIn } from '@/app/auth';

export const authenticate = async (formData) => {
  const { email, password } = Object.fromEntries(formData);

  try {
    console.log(email, password);
    await signIn('credentials', { email, password });
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
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

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return { error: `Product with id "${id}" does not exist` };
    }
  } catch (error) {
    console.log(error);
    return { error: 'Failed to delete!' };
  }

  revalidatePath('/dashboard/products');
  redirect('/dashboard/products');
};

export const updateProduct = async (formData) => {
  const { id, title, desc, cat, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const productToUpdate = await Product.findById(id);

    if (!productToUpdate) {
      return { error: `Product with id:${id} does not exist` };
    }

    const updatedFields = {
      title,
      desc,
      cat,
      price: Number(price),
      stock: Number(stock),
      color,
      size,
    };

    Object.keys(updatedFields).forEach(
      (key) =>
        (updatedFields[key] === '' ||
          updatedFields[key] === undefined ||
          updatedFields[key] === productToUpdate[key]) &&
        delete updatedFields[key]
    );

    if (Object.keys(updatedFields).length > 0) {
      await Product.findByIdAndUpdate(id, updatedFields);
    }
  } catch (error) {
    console.log(error);
    return { error: 'Failed to update user' };
  }

  revalidatePath('/dashboard/products');
  redirect('/dashboard/products');
};

export const addUser = async (formData) => {
  const { username, email, password, phone, role, status, address } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const isExist = await User.findOne({ email });

    if (isExist) {
      return { error: `User with email "${email}" already exist` };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      role,
      status,
      address,
    });

    await newUser.save();
  } catch (error) {
    console.log(error);
    return { error: 'Failed to create user' };
  }

  revalidatePath('/dashboard/users');
  redirect('/dashboard/users');
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return { error: `User with id "${id}" does not exist` };
    }
  } catch (error) {
    console.log(error);
    return { error: 'Failed to delete!' };
  }

  revalidatePath('/dashboard/users');
  redirect('/dashboard/users');
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, role, status, address } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const userToUpdate = await User.findById(id);

    if (!userToUpdate) {
      return { error: `User with id:${id} does not exist` };
    }

    const updatedFields = {};

    if (username !== '' && username !== userToUpdate.username) {
      updatedFields.username = username;
    }

    if (email !== '' && email !== userToUpdate.email) {
      const isExist = await User.findOne({ email });
      if (isExist) return { error: `User with email ${email} already exist.` };
      updatedFields.email = email;
    }

    if (password !== '') {
      const isComparePassword = await bcrypt.compare(
        password,
        userToUpdate.password
      );

      if (!isComparePassword) {
        const hashedPassword = await bcrypt.hash(password, 10);
        updatedFields.password = hashedPassword;
      }
    }

    if (phone !== '' && phone !== userToUpdate.phone) {
      updatedFields.phone = phone;
    }
    if (role !== '' && role !== userToUpdate.role) {
      updatedFields.role = role;
    }
    if (status !== '' && status !== userToUpdate.status) {
      updatedFields.status = status;
    }
    if (address !== '' && address !== userToUpdate.address) {
      updatedFields.address = address;
    }

    if (Object.keys(updatedFields).length > 0) {
      await User.findByIdAndUpdate(id, updatedFields);
    }
  } catch (error) {
    console.log(error);
    return { error: 'Failed to update user' };
  }

  revalidatePath('/dashboard/users');
  redirect('/dashboard/users');
};
