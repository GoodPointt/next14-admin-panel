import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';

const Login = () => {
  return (
    <Center height={'100vh'}>
      <Flex
        as={'form'}
        action=""
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
          <Input
            type="password"
            name="password"
            placeholder="Enter your password..."
            border={'none'}
            bgColor={'blackAlpha.200'}
            fontSize={'xl'}
          />
        </FormControl>

        <Button
          mt={4}
          colorScheme="teal"
          // isLoading={isSubmitting}
          type="submit"
        >
          Login
        </Button>
      </Flex>
    </Center>
  );
};

export default Login;
