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
        cursor: 'pointer',
        color: '#bbbbbb',
        textShadow:
          ' #FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px;',
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
