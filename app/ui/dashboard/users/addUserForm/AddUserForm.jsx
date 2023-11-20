'use client';

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import InputMask from 'react-input-mask';
import SubmitButton from '../../submitButton/SubmitButton';
import { addUser } from '@/app/lib/api/actions';
import { useState } from 'react';
import { EMAIL_REGEX, PHONE_REGEX } from '@/app/lib/constants';

const AddUserForm = () => {
  const toast = useToast();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const clientAction = async (formData) => {
    const { email, phone } = Object.fromEntries(formData);

    if (!EMAIL_REGEX.test(email)) {
      return toast({
        title: 'Warning!',
        description: 'Email incorrenct.',
        status: 'warning',
      });
    }

    if (phone && !PHONE_REGEX.test(phone)) {
      return toast({
        title: 'Warning!',
        description: 'Phone incorrenct.',
        status: 'warning',
      });
    }

    const result = await addUser(formData);

    if (result?.error) {
      return toast({
        title: 'Error!',
        description: result.error,
        status: 'error',
      });
    }

    return toast({
      title: 'Success!',
      description: 'User created successfully.',
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
          Username
          <Input
            type="text"
            name="username"
            placeholder="Enter username..."
            border={'none'}
            bgColor={'blackAlpha.200'}
            fontSize={'xl'}
            required
          />
        </FormLabel>
      </FormControl>
      <FormControl maxW={'49%'}>
        <FormLabel>
          Email
          <Input
            required
            type="email"
            name="email"
            placeholder="Enter email..."
            border={'none'}
            bgColor={'blackAlpha.200'}
            fontSize={'xl'}
          />
        </FormLabel>
      </FormControl>
      <FormControl maxW={'49%'}>
        <FormLabel>
          Password
          <InputGroup size="md">
            <Input
              type={show ? 'text' : 'password'}
              required
              minLength={6}
              name="password"
              placeholder="Enter password..."
              border={'none'}
              bgColor={'blackAlpha.200'}
              fontSize={'xl'}
            />
            <InputRightElement>
              <Button
                variant={'unstyled'}
                onClick={handleClick}
                color="lightgray"
                _hover={{ color: '#fff', transform: 'scale(1.05)' }}
              >
                {show ? <FaEyeSlash size={25} /> : <FaEye size={25} />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormLabel>
      </FormControl>
      <FormControl maxW={'49%'}>
        <FormLabel>
          Phone
          <Input
            as={InputMask}
            type="tel"
            name="phone"
            placeholder="Enter phone number..."
            border={'none'}
            bgColor={'blackAlpha.200'}
            fontSize={'xl'}
            mask="+38(***)***-**-**"
          />
        </FormLabel>
      </FormControl>
      <FormControl maxW={'49%'}>
        <FormLabel>
          Role
          <Select
            name="role"
            id="role"
            border={'none'}
            bgColor={'blackAlpha.200'}
            fontSize={'xl'}
            css={{
              '& option': {
                color: 'gray',
              },
            }}
          >
            <option value="client">Client</option>
            <option value="admin">Admin</option>
          </Select>
        </FormLabel>
      </FormControl>
      <FormControl maxW={'49%'}>
        <FormLabel>
          Status
          <Select
            name="status"
            id="status"
            border={'none'}
            bgColor={'blackAlpha.200'}
            fontSize={'xl'}
            css={{
              '& option': {
                color: 'gray',
              },
            }}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </Select>
        </FormLabel>
      </FormControl>

      <FormControl maxW={'100%'}>
        <FormLabel>
          Address
          <Textarea
            name="address"
            id="address"
            placeholder="Address..."
            size="sm"
            resize={'vertical'}
            border={'none'}
            bgColor={'blackAlpha.200'}
            borderRadius={'6.75px'}
            fontSize={'xl'}
          />
        </FormLabel>
      </FormControl>

      <SubmitButton>Submit</SubmitButton>
    </Flex>
  );
};

export default AddUserForm;
