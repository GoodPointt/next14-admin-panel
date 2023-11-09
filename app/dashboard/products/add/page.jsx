'use client';

import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useState } from 'react';

const AddProductPgae = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting((prev) => !prev);
    setTimeout(() => {
      alert(JSON.stringify(e.currentTarget, null, 2));
      setIsSubmitting((prev) => !prev);
    }, 1000);
  };
  return (
    <Box>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" name="email" />
          <FormHelperText>We`ll never share your email.</FormHelperText>
        </FormControl>

        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default AddProductPgae;
