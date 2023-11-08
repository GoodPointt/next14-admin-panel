import { Montserrat } from 'next/font/google';
import './ui/globals.css';
import Providers from './providers';
import { Box } from '@chakra-ui/react';

const inter = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Admin panel',
  description: 'Next.js v14 Admin control panel',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Box
        as="body"
        bg={'linear-gradient(to right, #4776e6, #8e54e9);'}
        color={'white'}
        className={inter.className}
        fontSize={18}
      >
        <Providers>{children}</Providers>
      </Box>
    </html>
  );
}
