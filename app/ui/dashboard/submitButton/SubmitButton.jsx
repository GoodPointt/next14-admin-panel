'use client';

import { Button } from '@chakra-ui/react';
import { useFormStatus } from 'react-dom';

const SubmitButton = ({ children }) => {
  const { pending } = useFormStatus();

  return (
    <Button
      variant={'solid'}
      bgColor={'green.500'}
      color={'white'}
      transition={'all 0.3s'}
      _hover={{ bgColor: 'green.600' }}
      type="submit"
      isLoading={pending}
      isDisabled={pending}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
