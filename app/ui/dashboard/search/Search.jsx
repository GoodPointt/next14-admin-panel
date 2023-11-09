import { Box, Input } from '@chakra-ui/react';
import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({ placeholder }) => {
  return (
    <Box pos={'relative'}>
      <MdSearch
        size={30}
        style={{ position: 'absolute', top: '8px', left: '4px' }}
      />
      <Input
        fontSize={'xl'}
        type="text"
        placeholder={placeholder}
        pl={8}
        border={'none'}
        bgColor={'blackAlpha.200'}
      />
    </Box>
  );
};

export default Search;
