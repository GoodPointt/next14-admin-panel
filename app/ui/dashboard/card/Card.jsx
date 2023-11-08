import { Flex, Text } from '@chakra-ui/react';
import { MdSupervisedUserCircle } from 'react-icons/md';

const Card = () => {
  return (
    <Flex
      gap={1}
      bg={'linear-gradient(to right, #654ea37e, #5f41a553)'}
      p={3}
      borderRadius={'10px'}
      transition={'all 0.3s'}
      _hover={{
        bgColor: '#36275f9c',
        cursor: 'pointer',
      }}
      w={'100%'}
    >
      <MdSupervisedUserCircle size={30} />
      <Flex flexDir={'column'}>
        <Text as={'span'} fontSize={'md'} fontWeight={600}>
          Total Users
        </Text>
        <Text as={'span'} fontSize={'3xl'} fontWeight={600}>
          10,273
        </Text>
        <Text as={'span'} fontSize={'x-small'} fontWeight={400}>
          <Text
            as={'span'}
            fontSize={'x-small'}
            color={'green.400'}
            fontWeight={600}
          >
            12%{' '}
          </Text>
          more than previous week
        </Text>
      </Flex>
    </Flex>
  );
};

export default Card;
