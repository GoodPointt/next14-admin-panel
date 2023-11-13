import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
} from '@chakra-ui/react';
import Image from 'next/image';

const SingleUserPage = () => {
  return (
    <Flex gap={'50px'} borderRadius={'10px'} mt={3}>
      <Box
        flex={1}
        bg={'linear-gradient(to right, #654ea37e, #5f41a553)'}
        p={5}
        borderRadius={'10px'}
        h={'max-content'}
      >
        <Box
          w={'100%'}
          h={'300px'}
          position={'relative'}
          borderRadius={'10px'}
          overflow={'hidden'}
          mb={4}
        >
          <Image src="/noavatar.png" alt="User avatar" fill />
        </Box>
        <Text fontWeight={900} fontSize={'xl'}>
          John Smith
        </Text>
      </Box>
      <Flex
        flex={3}
        as={'form'}
        action={''}
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
            placeholder="John Smith"
            border={'none'}
            bgColor={'blackAlpha.200'}
            fontSize={'xl'}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="John.Smith@email.com"
            border={'none'}
            bgColor={'blackAlpha.200'}
            fontSize={'xl'}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            placeholder="********"
            border={'none'}
            bgColor={'blackAlpha.200'}
            fontSize={'xl'}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Phone</FormLabel>
          <Input
            type="text"
            name="phone"
            placeholder="+12312312312"
            border={'none'}
            bgColor={'blackAlpha.200'}
            fontSize={'xl'}
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
            placeholder="USA, CA, Santa Clara"
            size="sm"
            resize={'vertical'}
            border={'none'}
            bgColor={'blackAlpha.200'}
            borderRadius={'6.75px'}
            fontSize={'xl'}
          />
        </FormControl>

        <Button
          mt={4}
          colorScheme="teal"
          // isLoading={isSubmitting}
          type="submit"
        >
          Update
        </Button>
      </Flex>
    </Flex>
  );
};

export default SingleUserPage;
