'use client';

import { authenticate } from '@/app/utils/api/serverActions';
import { EMAIL_REGEX } from '@/app/utils/constants';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import SubmitButton from '../dashboard/submitButton/SubmitButton';

const LoginForm = () => {
  const toast = useToast();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const clientAction = async (formData) => {
    const { email, password } = Object.fromEntries(formData);

    if (!EMAIL_REGEX.test(email)) {
      return toast({
        title: 'Warning!',
        description: 'Email incorrenct.',
        status: 'warning',
      });
    }

    const result = await authenticate(formData);

    if (result?.error) {
      return toast({
        title: 'Error!',
        description: result.error,
        status: 'error',
      });
    }
  };

  return (
    <Flex
      as={'form'}
      action={clientAction}
      flexDir={'column'}
      gap={5}
      bg={'linear-gradient(to right, #654ea37e, #5f41a553)'}
      p={12}
      borderRadius={'10px'}
    >
      <Heading as={'h1'} textAlign={'center'}>
        Login
      </Heading>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          placeholder="Enter email address..."
          border={'none'}
          bgColor={'blackAlpha.200'}
          fontSize={'xl'}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? 'text' : 'password'}
            minLength={6}
            name="password"
            placeholder="Enter your password..."
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
      </FormControl>

      <SubmitButton>Login</SubmitButton>
    </Flex>
  );
};

export default LoginForm;
