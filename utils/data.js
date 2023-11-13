import { User } from '@/models/user';
import { connectToDB } from './db';

export const fetchUsers = async (query, page) => {
  const regex = new RegExp(query, 'i');

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();

    const limit = process.env.NEXT_PUBLIC_LIMIT;

    const users = await User.find({ username: { $regex: regex } })
      .limit(limit)
      .skip(limit * (page - 1));
    return { users, count };
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch users');
  }
};
