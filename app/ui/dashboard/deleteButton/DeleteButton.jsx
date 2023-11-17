'use client';

import { Button } from '@chakra-ui/react';
import { useFormStatus } from 'react-dom';

const DeleteButton = ({ children }) => {
  const { pending } = useFormStatus();

  return (
    <Button
      variant={'solid'}
      bgColor={'red.500'}
      color={'white'}
      transition={'all 0.3s'}
      _hover={{ bgColor: 'red.600' }}
      ml={3}
      type="submit"
      isLoading={pending}
      isDisabled={pending}
    >
      {children}
    </Button>
  );
};

export default DeleteButton;
