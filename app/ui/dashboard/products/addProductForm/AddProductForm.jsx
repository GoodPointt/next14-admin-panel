'use client';

import {
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
import React from 'react';
import SubmitButton from '../../submitButton/SubmitButton';
import { addProduct } from '@/app/lib/api/actions';

const AddProductForm = () => {
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

    const result = await addProduct(formData);

    if (result?.error) {
      return toast({
        title: 'Error!',
        description: result.error,
        status: 'error',
      });
    }

    return toast({
      title: 'Success!',
      description: 'Product created successfully.',
      status: 'success',
    });
  };
  return (
    <Flex
      as={'form'}
      action={clientAction}
      wrap={'wrap'}
      justify={'space-between'}
      gap={3}
    >
      <FormControl maxW={'49%'}>
        <FormLabel>
          Title
          <Input
            type="text"
            name="title"
            placeholder="Product title..."
            border={'none'}
            bgColor={'blackAlpha.200'}
            fontSize={'xl'}
            required
            minLength={2}
          />
        </FormLabel>
      </FormControl>
      <FormControl maxW={'49%'}>
        <FormLabel>
          Select category
          <Select
            required
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
          >
            <option value="computer">Computer</option>
            <option value="phone">Phone</option>
            <option value="kitchen">Kitchen</option>
          </Select>
        </FormLabel>
      </FormControl>
      <FormControl maxW={'49%'}>
        <FormLabel>
          Price
          <NumberInput name="price" defaultValue={1} min={0} required>
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
        </FormLabel>
      </FormControl>
      <FormControl maxW={'49%'}>
        <FormLabel>
          Stock
          <NumberInput required name="stock" defaultValue={1} min={'0'}>
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
        </FormLabel>
      </FormControl>
      <FormControl maxW={'49%'}>
        <FormLabel>
          Color
          <Input
            type="color"
            name="color"
            placeholder="Product color..."
            border={'none'}
            bgColor={'blackAlpha.200'}
            fontSize={'xl'}
            _hover={{ cursor: 'pointer' }}
          />
        </FormLabel>
      </FormControl>
      <FormControl maxW={'49%'}>
        <FormLabel>
          Size
          <Input
            type="text"
            name="size"
            placeholder="Product size..."
            border={'none'}
            bgColor={'blackAlpha.200'}
            fontSize={'xl'}
          />
        </FormLabel>
      </FormControl>

      <FormControl maxW={'100%'}>
        <FormLabel>
          Description
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
            required
          />
        </FormLabel>
      </FormControl>

      <SubmitButton>Submit</SubmitButton>
    </Flex>
  );
};

export default AddProductForm;
