'use client';

import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
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
import { EMAIL_REGEX, PHONE_REGEX } from '@/app/utils/constants';
import InputMask from 'react-input-mask';
import SubmitButton from '@/app/ui/dashboard/submitButton/SubmitButton';
import { useState } from 'react';
import { updateUser } from '@/app/utils/api/serverActions';

const UpdateUserForm = ({
  id,
  username,
  email,
  phone,
  role,
  status,
  address,
}) => {
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

    const result = await updateUser(formData);

    if (result?.error) {
      return toast({
        title: 'Error!',
        description: result.error,
        status: 'error',
      });
    }

    return toast({
      title: 'Success!',
      description: 'User updated successfully.',
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
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          name="username"
          border={'none'}
          bgColor={'blackAlpha.200'}
          fontSize={'xl'}
          defaultValue={username}
          placeholder={username}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          defaultValue={email}
          placeholder={email}
          type="email"
          name="email"
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
            placeholder="********"
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
      <FormControl>
        <FormLabel>Phone</FormLabel>
        <Input
          as={InputMask}
          type="tel"
          name="phone"
          placeholder={phone || '+(380)000-00-00'}
          defaultValue={phone || '+(380)000-00-00'}
          border={'none'}
          bgColor={'blackAlpha.200'}
          fontSize={'xl'}
          mask="+38(***)***-**-**"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Role</FormLabel>
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
          defaultValue={role}
        >
          <option value="client">Client</option>
          <option value="admin">Admin</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Status</FormLabel>
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
          defaultValue={status}
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Address</FormLabel>
        <Textarea
          name="address"
          id="address"
          placeholder={address || 'USA, CA, Santa Clara'}
          defaultValue={address || 'USA, CA, Santa Clara'}
          size="sm"
          resize={'vertical'}
          border={'none'}
          bgColor={'blackAlpha.200'}
          borderRadius={'6.75px'}
          fontSize={'xl'}
        />
      </FormControl>
      <Input type="hidden" value={id} name="id" />

      <SubmitButton>Update</SubmitButton>
    </Flex>
  );
};

export default UpdateUserForm;
