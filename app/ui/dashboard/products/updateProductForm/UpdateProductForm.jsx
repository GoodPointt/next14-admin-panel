'use client';

import { updateProduct } from '@/app/utils/api/serverActions';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Textarea,
  useToast,
} from '@chakra-ui/react';

const UpdateProductForm = ({
  id,
  title,
  desc,
  cat,
  price,
  stock,
  color,
  size,
}) => {
  const toast = useToast();

  const clientAction = async (formData) => {
    const { price, stock } = Object.fromEntries(formData);

    if (price < 0) {
      return toast({
        title: 'Warning!',
        description: 'Price cannot be less than zero.',
        status: 'warning',
      });
    }

    if (stock < 0) {
      return toast({
        title: 'Warning!',
        description: 'Stock cannot be less than zero.',
        status: 'warning',
      });
    }

    const result = await updateProduct(formData);

    if (result?.error) {
      return toast({
        title: 'Error!',
        description: result.error,
        status: 'error',
      });
    }

    return toast({
      title: 'Success!',
      description: 'Product updated successfully.',
      status: 'success',
    });
  };
  return (
    <Flex
      flex={3}
      as={'form'}
      action={clientAction}
      flexDir={'column'}
      gap={3}
      bg={'linear-gradient(to right, #654ea37e, #5f41a553)'}
      p={5}
      borderRadius={'10px'}
    >
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input
          type="text"
          name="title"
          placeholder="Product title..."
          border={'none'}
          bgColor={'blackAlpha.200'}
          fontSize={'xl'}
          defaultValue={title}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Select category</FormLabel>
        <Select
          name="cat"
          id="cat"
          border={'none'}
          bgColor={'blackAlpha.200'}
          fontSize={'xl'}
          css={{
            '& option': {
              color: 'gray',
            },
          }}
          defaultValue={cat}
        >
          <option value="computer">Computer</option>
          <option value="phone">Phone</option>
          <option value="kitchen">Kitchen</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Price</FormLabel>
        <NumberInput name="price" defaultValue={price || 1} min={'0'}>
          <NumberInputField
            border={'none'}
            bgColor={'blackAlpha.200'}
            fontSize={'xl'}
          />
          <NumberInputStepper>
            <NumberIncrementStepper color={'white'} border={'none'} />
            <NumberDecrementStepper color={'white'} border={'none'} />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl>
        <FormLabel>Stock</FormLabel>
        <NumberInput name="stock" defaultValue={stock || 1} min={'0'}>
          <NumberInputField
            border={'none'}
            bgColor={'blackAlpha.200'}
            fontSize={'xl'}
          />
          <NumberInputStepper>
            <NumberIncrementStepper color={'white'} border={'none'} />
            <NumberDecrementStepper color={'white'} border={'none'} />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl>
        <FormLabel>Color</FormLabel>
        <Input
          type="color"
          name="color"
          placeholder="Product color..."
          border={'none'}
          bgColor={'blackAlpha.200'}
          fontSize={'xl'}
          defaultValue={color}
          _hover={{ cursor: 'pointer' }}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Size</FormLabel>
        <Input
          type="text"
          name="size"
          placeholder="Product size..."
          border={'none'}
          bgColor={'blackAlpha.200'}
          fontSize={'xl'}
          defaultValue={size}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Description</FormLabel>
        <Textarea
          name="desc"
          id="desc"
          placeholder="Product description..."
          size="sm"
          resize={'vertical'}
          border={'none'}
          bgColor={'blackAlpha.200'}
          fontSize={'xl'}
          borderRadius={'6.75px'}
          defaultValue={desc}
        />
      </FormControl>
      <Input type="hidden" value={id} name="id" />

      <Button mt={4} colorScheme="teal" type="submit">
        Update
      </Button>
    </Flex>
  );
};

export default UpdateProductForm;
