import UpdateProductForm from '@/app/ui/dashboard/products/updateProductForm/UpdateProductForm';
import { fetchProduct } from '@/app/utils/api/data';
import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const { img, title, desc, cat, price, stock, color, size } =
    await fetchProduct(id);

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
          <Image
            src={img || '/noproduct.jpg'}
            alt="User avatar"
            fill
            style={{ objectFit: 'contain' }}
          />
        </Box>
        <Text fontWeight={900} fontSize={'xl'}>
          {title}
        </Text>
      </Box>
      <UpdateProductForm
        id={id}
        cat={cat}
        title={title}
        desc={desc}
        price={price}
        stock={stock}
        color={color}
        size={size}
      />
    </Flex>
  );
};

export default SingleProductPage;
