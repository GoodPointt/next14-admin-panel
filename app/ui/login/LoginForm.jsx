'use client';

import { MdErrorOutline } from 'react-icons/md';

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Box,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import SubmitButton from '../dashboard/submitButton/SubmitButton';
import { useFormState } from 'react-dom';
import { authenticate } from '@/app/lib/api/actions';

const LoginForm = () => {
  const [state, dispatch] = useFormState(authenticate, undefined);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Flex
      as={'form'}
      action={dispatch}
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

      <Box display={'flex'} h={8} alignItems={'end'} gap={2}>
        {state === 'CredentialsSignin' && (
          <>
            <MdErrorOutline size={30} color="crimson" />
            <Text fontSize={20} color={'crimson'}>
              Invalid credentials
            </Text>
          </>
        )}
      </Box>
    </Flex>
  );
};

export default LoginForm;
