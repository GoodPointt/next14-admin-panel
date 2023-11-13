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
  Text,
  Textarea,
} from '@chakra-ui/react';
import Image from 'next/image';

const SingleProductPage = () => {
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
          <Image src="/noproduct.jpg" alt="User avatar" fill />
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
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            name="title"
            placeholder="Product title..."
            border={'none'}
            bgColor={'blackAlpha.200'}
            fontSize={'xl'}
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
          >
            <option value="computer">Computer</option>
            <option value="phone">Phone</option>
            <option value="kitchen">Kitchen</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Price</FormLabel>
          <NumberInput name="price" defaultValue={1} min={'0'}>
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
          <NumberInput name="stock" defaultValue={1} min={'0'}>
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
            type="text"
            name="color"
            placeholder="Product color..."
            border={'none'}
            bgColor={'blackAlpha.200'}
            fontSize={'xl'}
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

export default SingleProductPage;
