import Pagination from '@/app/ui/dashboard/pagination/Pagination';
import Search from '@/app/ui/dashboard/search/Search';
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

const UsersPage = () => {
  return (
    <Box
      mt={3}
      bg={'linear-gradient(to right, #654ea37e, #5f41a553)'}
      p={5}
      borderRadius={'27px'}
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
            <Tr>
              <Td display={'flex'} alignItems="center" gap={2} p={'27px 27px'}>
                <Image
                  src="/noavatar.png"
                  alt="User avatar image"
                  width="30"
                  height="30"
                  style={{ objectFit: 'contain', borderRadius: '50%' }}
                />
                <span>John Smith</span>
              </Td>
              <Td>js@mail.com</Td>
              <Td>Oct 29 2023</Td>
              <Td>client</Td>
              <Td>active</Td>
              <Td>
                <Button
                  variant={'solid'}
                  bgColor={'green.500'}
                  color={'white'}
                  transition={'all 0.3s'}
                  _hover={{ bgColor: 'green.600' }}
                >
                  View
                </Button>
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
            <Tr>
              <Td display={'flex'} alignItems="center" gap={2} p={'27px 27px'}>
                <Image
                  src="/noavatar.png"
                  alt="User avatar image"
                  width="30"
                  height="30"
                  style={{ objectFit: 'contain', borderRadius: '50%' }}
                />
                <span>John Smith</span>
              </Td>
              <Td>js@mail.com</Td>
              <Td>Oct 29 2023</Td>
              <Td>client</Td>
              <Td>active</Td>
              <Td>
                <Button
                  variant={'solid'}
                  bgColor={'green.500'}
                  color={'white'}
                  transition={'all 0.3s'}
                  _hover={{ bgColor: 'green.600' }}
                >
                  View
                </Button>
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
            <Tr>
              <Td display={'flex'} alignItems="center" gap={2} p={'27px 27px'}>
                <Image
                  src="/noavatar.png"
                  alt="User avatar image"
                  width="30"
                  height="30"
                  style={{ objectFit: 'contain', borderRadius: '50%' }}
                />
                <span>John Smith</span>
              </Td>
              <Td>js@mail.com</Td>
              <Td>Oct 29 2023</Td>
              <Td>client</Td>
              <Td>active</Td>
              <Td>
                <Button
                  variant={'solid'}
                  bgColor={'green.500'}
                  color={'white'}
                  transition={'all 0.3s'}
                  _hover={{ bgColor: 'green.600' }}
                >
                  View
                </Button>
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
          </Tbody>
        </Table>
      </TableContainer>
      <Pagination />
    </Box>
  );
};

export default UsersPage;
