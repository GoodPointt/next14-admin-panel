'use client';

import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from 'react-icons/md';

import { usePathname } from 'next/navigation';
import { Box, Flex, Heading, Input } from '@chakra-ui/react';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <Flex
      align={'center'}
      justify={'space-between'}
      bg={'linear-gradient(to right, #654ea37e, #5f41a553)'}
      p={5}
      borderRadius={'10px'}
    >
      <Heading textTransform={'capitalize'} fontSize={'2xl'} fontWeight={900}>
        {pathname.split('/').pop()}
      </Heading>
      <Flex align={'center'} gap={2}>
        <Box pos={'relative'}>
          <MdSearch
            size={30}
            style={{ position: 'absolute', top: '8px', left: '4px' }}
          />
          <Input
            type="text"
            placeholder="Search..."
            pl={8}
            border={'none'}
            bgColor={'blackAlpha.200'}
          />
        </Box>
        <Flex>
          <MdOutlineChat size={30} />
          <MdNotifications size={30} />
          <MdPublic size={30} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
