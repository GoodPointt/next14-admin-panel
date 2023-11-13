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

const AddProductPgae = () => {
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
        <FormControl maxW={'45%'}>
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
        <FormControl maxW={'45%'}>
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
        <FormControl maxW={'45%'}>
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
        <FormControl maxW={'45%'}>
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
        <FormControl maxW={'45%'}>
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

        <FormControl maxW={'100%'}>
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
          Submit
        </Button>
      </Flex>
    </Box>
  );
};

export default AddProductPgae;
