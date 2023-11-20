import {
  Box,
  Button,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { IoAddCircleOutline } from 'react-icons/io5';

import Pagination from '@/app/ui/dashboard/pagination/Pagination';
import Search from '@/app/ui/dashboard/search/Search';
import { fetchUsers } from '@/app/lib/api/data';
import { formatMongoDate } from '@/app/lib/helpers/formatDate';
import DeleteForm from '@/app/ui/dashboard/deleteForm/DeleteForm';

const UsersPage = async ({ searchParams }) => {
  const query = searchParams?.query || '';
  const page = searchParams?.page || 1;

  const { users, count } = await fetchUsers(query, page);

  return (
    <Box
      mt={3}
      bg={'linear-gradient(to right, #654ea37e, #5f41a553)'}
      p={5}
      borderRadius={'10px'}
    >
      <Flex align={'center'} justify={'space-between'}>
        <Search placeholder={'Search for a user...'} />
        <Link href={'/dashboard/users/add'}>
          <Button
            variant={'solid'}
            bg={'blue.500'}
            color={'white'}
            w={'fit-content'}
            _hover={{ bgColor: 'blue.600' }}
          >
            <IoAddCircleOutline size={24} color="white" /> Add New
          </Button>
        </Link>
      </Flex>

      <TableContainer>
        <Table variant="striped" colorScheme="blackAlpha">
          <Thead>
            <Tr>
              <Th color={'whiteAlpha.500'} textAlign={'left'}>
                Name
              </Th>
              <Th color={'whiteAlpha.500'} textAlign={'left'}>
                Email
              </Th>
              <Th color={'whiteAlpha.500'} textAlign={'left'}>
                Created at
              </Th>
              <Th color={'whiteAlpha.500'} textAlign={'left'}>
                Role
              </Th>
              <Th color={'whiteAlpha.500'} textAlign={'left'}>
                Status
              </Th>
              <Th color={'whiteAlpha.500'} textAlign={'left'}>
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.length > 0 &&
              users.map((user) => (
                <Tr key={user._id} p={'27px 27px'}>
                  <Td display={'flex'} alignItems="center" gap={2}>
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
                    <span>{user.username}</span>
                  </Td>
                  <Td>{user.email}</Td>
                  <Td>{formatMongoDate(user.createdAt)}</Td>
                  <Td>{user.role}</Td>
                  <Td>{user.status}</Td>
                  <Td>
                    <Link href={`/dashboard/users/${user._id}`}>
                      <Button
                        variant={'solid'}
                        bgColor={'green.500'}
                        color={'white'}
                        transition={'all 0.3s'}
                        _hover={{ bgColor: 'green.600' }}
                      >
                        View
                      </Button>
                    </Link>

                    <DeleteForm id={user._id.toString()} variant={'user'} />
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Pagination count={count} />
    </Box>
  );
};

export default UsersPage;
