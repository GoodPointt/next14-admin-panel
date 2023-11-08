import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md';

const Rightbar = () => {
  return (
    <Box>
      <Box
        bg={'linear-gradient(to top, #503a6f, #4c2c79)'}
        p={'20px 24px'}
        borderRadius={'10px'}
        mb={'20px'}
        pos={'relative'}
      >
        <Box pos={'absolute'} bottom={'0%'} right={'0%'} w={'50%'} h={'50%'}>
          <Image
            src={'/astronaut.png'}
            alt="Astronaut image"
            fill
            style={{ objectFit: 'contain', opacity: '0.2' }}
          />
        </Box>
        <Flex flexDir={'column'} gap={5}>
          <Text as={'span'} size={'sm'} fontWeight={400}>
            🔥 Available Nov
          </Text>
          <Heading order={4} size={'md'} fontWeight={600}>
            How to use the new version of the admin dashboard?
          </Heading>
          <Text as={'span'} size={'sm'} fontWeight={600}>
            Takes 5 minutes to learn
          </Text>
          <Text size={'sm'} fontWeight={400}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, non
            dolor sequi explicabo delectus quaerat?
          </Text>
          <Button
            variant={'solid'}
            bg={'blue.500'}
            color={'white'}
            w={'fit-content'}
            _hover={{ bgColor: 'blue.600' }}
          >
            <MdPlayCircleFilled size={30} /> Watch
          </Button>
        </Flex>
      </Box>

      <Box
        bg={'linear-gradient(to top, #554073, #4c2c79)'}
        p={'20px 24px'}
        borderRadius={'10px'}
        mb={'20px'}
      >
        <Flex flexDir={'column'} gap={5}>
          <Text as={'span'} size={'sm'} fontWeight={400}>
            🚀 Coming Soon
          </Text>
          <Heading order={4} size={'md'} fontWeight={600}>
            New server actions are available, partial pre-rendering is coming
            up!
          </Heading>
          <Text as={'span'} size={'sm'} fontWeight={600}>
            Boost your productivity
          </Text>
          <Text size={'sm'} fontWeight={400}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </Text>
          <Button
            variant={'solid'}
            bg={'blue.500'}
            color={'white'}
            w={'fit-content'}
            _hover={{ bgColor: 'blue.600' }}
          >
            <MdReadMore size={30} />
            Learn
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Rightbar;
