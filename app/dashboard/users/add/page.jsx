import {
  Box,
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
} from '@chakra-ui/react';

const AddUserPgae = () => {
  return (
    <Box
      bg={'linear-gradient(to right, #654ea37e, #5f41a553)'}
      p={5}
      borderRadius={'10px'}
      mt={3}
    >
      <Flex
        as={'form'}
        action={''}
        wrap={'wrap'}
        justify={'space-between'}
        gap={3}
      >
        <FormControl maxW={'45%'}>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            name="username"
            placeholder="Enter username..."
            border={'none'}
            bgColor={'blackAlpha.200'}
            fontSize={'xl'}
          />
        </FormControl>
        <FormControl maxW={'45%'}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="Enter email..."
            border={'none'}
            bgColor={'blackAlpha.200'}
            fontSize={'xl'}
          />
        </FormControl>
        <FormControl maxW={'45%'}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            placeholder="Enter password..."
            border={'none'}
            bgColor={'blackAlpha.200'}
            fontSize={'xl'}
          />
        </FormControl>
        <FormControl maxW={'45%'}>
          <FormLabel>Phone</FormLabel>
          <Input
            type="text"
            name="phone"
            placeholder="Enter phone number..."
            border={'none'}
            bgColor={'blackAlpha.200'}
            fontSize={'xl'}
          />
        </FormControl>
        <FormControl maxW={'45%'}>
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
        <FormControl maxW={'45%'}>
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

        <FormControl maxW={'100%'}>
          <FormLabel>Address</FormLabel>
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
        </FormControl>

        <Button
          mt={4}
          colorScheme="teal"
          // isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </Flex>
    </Box>
  );
};

export default AddUserPgae;
