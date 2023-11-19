import { Box, Button, Flex, List, ListItem, Text } from '@chakra-ui/react';
import React from 'react';

import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from 'react-icons/md';

import MenuLink from './menuLink/MenuLink';
import Image from 'next/image';
import { signOut } from '@/app/auth';

const menuItems = [
  {
    title: 'Pages',
    list: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <MdDashboard size={30} />,
      },
      {
        title: 'Users',
        path: '/dashboard/users',
        icon: <MdSupervisedUserCircle size={30} />,
      },
      {
        title: 'Products',
        path: '/dashboard/products',
        icon: <MdShoppingBag size={30} />,
      },
      {
        title: 'Transactions',
        path: '/dashboard/transactions',
        icon: <MdAttachMoney size={30} />,
      },
    ],
  },
  {
    title: 'Analytics',
    list: [
      {
        title: 'Revenue',
        path: '/dashboard/revenue',
        icon: <MdWork size={30} />,
      },
      {
        title: 'Reports',
        path: '/dashboard/reports',
        icon: <MdAnalytics size={30} />,
      },
      {
        title: 'Teams',
        path: '/dashboard/teams',
        icon: <MdPeople size={30} />,
      },
    ],
  },
  {
    title: 'User',
    list: [
      {
        title: 'Settings',
        path: '/dashboard/settings',
        icon: <MdOutlineSettings size={30} />,
      },
      {
        title: 'Help',
        path: '/dashboard/help',
        icon: <MdHelpCenter size={30} />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <Box pos={'sticky'}>
      <Box>
        <Flex align={'center'} gap={3}>
          <Image
            src="/noavatar.png"
            alt="User avatar image"
            width="50"
            height="50"
            style={{ objectFit: 'contain', borderRadius: '50%' }}
          />
          <Box>
            <Text fontSize={'md'} fontWeight={900}>
              John Smith
            </Text>
            <Text fontSize={'sm'} fontWeight={400} color={'whitesmoke'}>
              Administrator
            </Text>
          </Box>
        </Flex>
      </Box>
      <List spacing={5} mt={10}>
        {menuItems.length > 0 &&
          menuItems.map(({ title, list }) => (
            <ListItem key={title}>
              <Text fontSize={'md'} fontWeight={600} color={'whatsapp.100'}>
                {title}
              </Text>
              <List spacing={4} mt={5}>
                {list.map((item) => (
                  <MenuLink key={item.title} item={item} />
                ))}
              </List>
            </ListItem>
          ))}
      </List>
      <Flex align={'center'} mt={2}>
        <Button
          p={0}
          variant={'ghost'}
          color={'white'}
          _hover={{
            cursor: 'pointer',
            color: 'violet',
            backgroundColor: 'transparent',
            transform: 'translateX(5px)',
          }}
          transition={'all 0.3s'}
          fontSize={'md'}
          fontWeight={400}
          w={'100%'}
          justifyContent={'left'}
        >
          <MdLogout size={30} /> <Text>Logout</Text>
        </Button>
      </Flex>
    </Box>
  );
};

export default Sidebar;
Sidebar;
