'use client';

import { Link } from '@chakra-ui/next-js';
import { ListItem } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import React from 'react';

const MenuLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <ListItem
      key={item.title}
      _hover={{
        transform: 'translateX(5px)',
        cursor: 'pointer',
        color: 'violet',
      }}
      transition={'all 0.3s'}
      color={pathname === item.path && 'violet'}
    >
      <Link
        href={item.path}
        display={'flex'}
        align={'center'}
        gap={1}
        textDecor={'none'}
        fontSize={'md'}
        fontWeight={400}
        _hover={{ textDecoration: 'none' }}
      >
        {item.icon} {item.title}
      </Link>
    </ListItem>
  );
};

export default MenuLink;
