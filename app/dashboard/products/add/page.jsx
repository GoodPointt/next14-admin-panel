import AddProductForm from '@/app/ui/dashboard/addProductForm/AddProductForm';
import { Box } from '@chakra-ui/react';

const AddProductPgae = () => {
  return (
    <Box
      bg={'linear-gradient(to right, #654ea37e, #5f41a553)'}
      p={5}
      borderRadius={'10px'}
      mt={3}
    >
      <AddProductForm />
    </Box>
  );
};

export default AddProductPgae;
