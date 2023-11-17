'use client';

import { Box, Input, useToast } from '@chakra-ui/react';
import React from 'react';
import DeleteButton from '../deleteButton/DeleteButton';
import { deleteProduct, deleteUser } from '@/utils/api/serverActions';

const DeleteForm = ({ id, variant }) => {
  const toast = useToast();

  const clientAction = async (formData) => {
    const { id } = Object.fromEntries(formData);

    if (!id || id.length !== 24) {
      return toast({
        title: 'Warning!',
        description: 'Id incorrenct.',
        status: 'warning',
      });
    }

    let result;

    if (variant === 'user') result = await deleteUser(formData);
    if (variant === 'product') result = await deleteProduct(formData);

    if (result?.error) {
      return toast({
        title: 'Error!',
        description: result.error,
        status: 'error',
      });
    }

    return toast({
      title: 'Success!',
      description: 'Deleted successfully.',
      status: 'success',
    });
  };

  return (
    <Box as="form" display={'inline-block'} action={clientAction}>
      <Input type="hidden" value={id} name="id" />
      <DeleteButton>Delete</DeleteButton>
    </Box>
  );
};

export default DeleteForm;
