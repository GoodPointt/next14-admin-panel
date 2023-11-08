import React from 'react';
import Navbar from '../ui/dashboard/navbar/Navbar';
import Sidebar from '../ui/dashboard/sidebar/Sidebar';
import { Box, Flex } from '@chakra-ui/react';

const layout = ({ children }) => {
  return (
    <Flex>
      <Box
        flex={1}
        p={5}
        h={'fit-content'}
        bg={'linear-gradient(to right, #654ea37e, #5f41a553)'}
        borderTopRightRadius={'10px'}
        borderBottomRightRadius={'10px'}
      >
        <Sidebar />
      </Box>
      <Box flex={6} p={5}>
        <Navbar />
        {children}
      </Box>
    </Flex>
  );
};

export default layout;
