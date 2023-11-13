'use client';

import { Box, Input } from '@chakra-ui/react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React from 'react';
import { MdSearch } from 'react-icons/md';
import { useDebouncedCallback } from 'use-debounce';

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    params.set('page', 1);

    if (e.target.value) {
      e.target.value.length > 1 && params.set('query', e.target.value);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params}`);
  }, 300);

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
        onChange={handleSearch}
      />
    </Box>
  );
};

export default Search;
