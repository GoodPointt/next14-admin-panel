'use client';

import { Box, Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <Box py={20}>
      <Text
        display={'flex'}
        flexWrap={'wrap'}
        gap={3}
        alignItems={'center'}
        fontSize={'xl'}
        justifyContent={'center'}
      >
        <Text as={'span'}>Developed by</Text>
        <Link
          color="blue.900"
          href="https://github.com/GoodPointt"
          rel="noopener noreferrer nofollow"
          target="_blank"
          fontSize={'2xl'}
          transition={'all 0.3s'}
          _hover={{ color: 'blue.100', transform: 'scale(1.05)' }}
        >
          <Text as={'span'} display={'flex'} gap={1}>
            <BsGithub size={30} />
            {'  '}
            Dmytro Petyshyn
          </Text>
        </Link>
        <Text as={'span'}> © 2023 All rights reserved.</Text>
      </Text>
    </Box>
  );
};

export default Footer;
