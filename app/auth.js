import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { authConfig } from './authconfig';
import { connectToDB } from '@/app/utils/api/db';
import { User } from '@/app/utils/api/models/user';
import bcrypt from 'bcrypt';

const login = async (credentials) => {
  try {
    connectToDB();
    const user = await User.findOne({ email: credentials.email });
    if (!user) throw new Error('Wrong credentials');

    const isComparePassword = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!isComparePassword) throw new Error('Wrong credentials');

    return user;
  } catch (error) {
    throw new Error('Failed to login');
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
});
