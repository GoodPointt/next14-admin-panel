import Pagination from '@/app/ui/dashboard/pagination/Pagination';
import Search from '@/app/ui/dashboard/search/Search';
import { fetchProducts } from '@/utils/api/data';
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
import React from 'react';
import { IoAddCircleOutline } from 'react-icons/io5';

const ProductsPage = async ({ searchParams }) => {
  const query = searchParams?.query || '';
  const page = searchParams?.page || 1;

  const { products, count } = await fetchProducts(query, page);
  return (
    <Box
      mt={3}
      bg={'linear-gradient(to right, #654ea37e, #5f41a553)'}
      p={5}
      borderRadius={'27px'}
    >
      <Flex align={'center'} justify={'space-between'}>
        <Search placeholder={'Search for a product...'} />
        <Link href={'/dashboard/products/add'}>
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
                Title
              </Th>
              <Th color={'whiteAlpha.500'} textAlign={'left'}>
                Description
              </Th>
              <Th color={'whiteAlpha.500'} textAlign={'left'}>
                Price
              </Th>
              <Th color={'whiteAlpha.500'} textAlign={'left'}>
                Created at
              </Th>
              <Th color={'whiteAlpha.500'} textAlign={'left'}>
                Stock
              </Th>
              <Th color={'whiteAlpha.500'} textAlign={'left'}>
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.length > 0 &&
              products.map((product) => (
                <Tr p={'27px 27px'} key={product._id}>
                  <Td display={'flex'} alignItems="center" gap={2}>
                    <Image
                      src={product.img || '/product.png'}
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
                    <span>{product.title}</span>
                  </Td>
                  <Td>{product.desc}</Td>
                  <Td>{'$' + product.price}</Td>
                  <Td>{formatMongoDate(product.createdAt)}</Td>
                  <Td>{product.stock}</Td>
                  <Td>
                    <Link href={`/dashboard/products/${product._id}`}>
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

export default ProductsPage;
