import AddUserForm from '@/app/ui/dashboard/users/addUserForm/AddUserForm';

import { Box } from '@chakra-ui/react';

const AddUserPgae = () => {
  return (
    <Box
      bg={'linear-gradient(to right, #654ea37e, #5f41a553)'}
      p={5}
      borderRadius={'10px'}
      mt={3}
    >
      <AddUserForm />
    </Box>
  );
};

export default AddUserPgae;
