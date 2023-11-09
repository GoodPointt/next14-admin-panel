import { Button, Flex } from '@chakra-ui/react';
import { ImArrowLeft } from 'react-icons/im';
import { ImArrowRight } from 'react-icons/im';

const Pagination = () => {
  const isDisabled = true;
  return (
    <Flex justify={'center'} gap={20} py={10}>
      <Button
        variant={'unstyled'}
        _hover={{
          color: isDisabled ? 'lightgray' : 'violet',
          cursor: isDisabled && 'not-allowed',
        }}
        disabled={isDisabled}
      >
        <ImArrowLeft size={35} />
      </Button>
      <Button
        variant={'unstyled'}
        _hover={{
          color: isDisabled ? 'lightgray' : 'violet',
          cursor: isDisabled && 'not-allowed',
        }}
        disabled={isDisabled}
      >
        <ImArrowRight size={35} />
      </Button>
    </Flex>
  );
};

export default Pagination;
