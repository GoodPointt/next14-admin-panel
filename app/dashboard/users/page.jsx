import Pagination from '@/app/ui/dashboard/pagination/Pagination';
import Search from '@/app/ui/dashboard/search/Search';
import { fetchUsers } from '@/utils/data';
import { formatMongoDate } from '@/utils/helpers/formatDate';
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
                <Tr key={user._id}>
                  <Td
                    display={'flex'}
                    alignItems="center"
                    gap={2}
                    p={'27px 27px'}
                  >
                    <Image
                      src={user.img ?? '/noavatar.png'}
                      alt="User avatar image"
                      width="30"
                      height="30"
                      style={{
                        objectFit: 'cover',
                        borderRadius: '50%',
                        maxHeight: 30,
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
                    <Button
                      variant={'solid'}
                      bgColor={'red.500'}
                      color={'white'}
                      transition={'all 0.3s'}
                      _hover={{ bgColor: 'red.600' }}
                      ml={3}
                    >
                      Delete
                    </Button>
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
