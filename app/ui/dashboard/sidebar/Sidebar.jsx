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
import { auth, signOut } from '@/app/auth';

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

const Sidebar = async () => {
  const { user } = await auth();

  return (
    <Box pos={'sticky'}>
      <Box>
        <Flex align={'center'} gap={3}>
          <Box display={'flex'} alignItems="center" gap={2}>
            <Image
              src={user.img ?? '/noavatar.png'}
              alt="User avatar image"
              width="60"
              height="60"
              style={{
                objectFit: 'cover',
                borderRadius: '50%',
                height: 60,
                width: 60,
                display: 'block',
              }}
            />
          </Box>
          <Box>
            <Text fontSize={'md'} fontWeight={900}>
              {user.username}
            </Text>
            <Text fontSize={'sm'} fontWeight={400} color={'whitesmoke'}>
              {user.role === 'admin' ? 'Administrator' : 'User'}
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
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <Button
            type="submit"
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
        </form>
      </Flex>
    </Box>
  );
};

export default Sidebar;
Sidebar;
