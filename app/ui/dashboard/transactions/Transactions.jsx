import Image from 'next/image';

import { Box, Heading } from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';

const getStatusColor = (status) => {
  switch (status) {
    case 'pending':
      return 'yellow';
    case 'cancelled':
      return 'red';
    case 'done':
      return 'green';
    default:
      return 'white';
  }
};

const Transactions = () => {
  return (
    <Box
      bg={'linear-gradient(to right, #654ea37e, #5f41a553)'}
      p={5}
      borderRadius={'10px'}
    >
      <Heading order={3} fontSize={'xl'} fontWeight={900}>
        Latest Transactions
      </Heading>
      <TableContainer>
        <Table variant="striped" colorScheme="blackAlpha">
          <Thead>
            <Tr>
              <Th color={'whiteAlpha.500'} textAlign={'left'}>
                Name
              </Th>
              <Th color={'whiteAlpha.500'} textAlign={'left'}>
                Status
              </Th>
              <Th isNumeric color={'whiteAlpha.500'} textAlign={'left'}>
                Date
              </Th>
              <Th isNumeric color={'whiteAlpha.500'} textAlign={'left'}>
                Amount
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td display={'flex'} alignItems="center" gap={2}>
                <Image
                  src="/noavatar.png"
                  alt="User avatar image"
                  width="30"
                  height="30"
                  style={{ objectFit: 'contain', borderRadius: '50%' }}
                />
                <span>John Smith</span>
              </Td>
              <Td color={getStatusColor('pending')}>prending</Td>
              <Td isNumeric>14.03.2023</Td>
              <Td isNumeric>$420</Td>
            </Tr>
            <Tr>
              <Td display={'flex'} alignItems="center" gap={2}>
                <Image
                  src="/noavatar.png"
                  alt="User avatar image"
                  width="30"
                  height="30"
                  style={{ objectFit: 'contain', borderRadius: '50%' }}
                />
                <span>John Smith</span>
              </Td>
              <Td color={getStatusColor('done')}>done</Td>
              <Td isNumeric>11.03.2023</Td>
              <Td isNumeric>$230</Td>
            </Tr>
            <Tr>
              <Td display={'flex'} alignItems="center" gap={2}>
                <Image
                  src="/noavatar.png"
                  alt="User avatar image"
                  width="30"
                  height="30"
                  style={{ objectFit: 'contain', borderRadius: '50%' }}
                />
                <span>John Smith</span>
              </Td>
              <Td color={getStatusColor('cancelled')}>cancelled</Td>
              <Td isNumeric>09.03.2023</Td>
              <Td isNumeric>$50</Td>
            </Tr>
            <Tr>
              <Td display={'flex'} alignItems="center" gap={2}>
                <Image
                  src="/noavatar.png"
                  alt="User avatar image"
                  width="30"
                  height="30"
                  style={{ objectFit: 'contain', borderRadius: '50%' }}
                />
                <span>John Smith</span>
              </Td>
              <Td color={getStatusColor('pending')}>prending</Td>
              <Td isNumeric>07.03.2023</Td>
              <Td isNumeric>$420</Td>
            </Tr>
            <Tr>
              <Td display={'flex'} alignItems="center" gap={2}>
                <Image
                  src="/noavatar.png"
                  alt="User avatar image"
                  width="30"
                  height="30"
                  style={{ objectFit: 'contain', borderRadius: '50%' }}
                />
                <span>John Smith</span>
              </Td>
              <Td color={getStatusColor('done')}>done</Td>
              <Td isNumeric>05.03.2023</Td>
              <Td isNumeric>$230</Td>
            </Tr>
            <Tr>
              <Td display={'flex'} alignItems="center" gap={2}>
                <Image
                  src="/noavatar.png"
                  alt="User avatar image"
                  width="30"
                  height="30"
                  style={{ objectFit: 'contain', borderRadius: '50%' }}
                />
                <span>John Smith</span>
              </Td>
              <Td color={getStatusColor('cancelled')}>cancelled</Td>
              <Td isNumeric>01.03.2023</Td>
              <Td isNumeric>$50</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Transactions;
