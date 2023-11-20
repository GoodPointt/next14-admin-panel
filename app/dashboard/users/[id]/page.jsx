import UpdateUserForm from '@/app/ui/dashboard/users/updateUserForm/UpdateUserForm';
import { fetchUser } from '@/app/lib/api/data';
import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const { img, username, email, password, phone, role, status, address } =
    await fetchUser(id);

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
            src={img || '/noavatar.png'}
            alt="User avatar"
            fill
            style={{ objectFit: 'contain' }}
          />
        </Box>
        <Text fontWeight={900} fontSize={'xl'}>
          {username}
        </Text>
      </Box>
      <UpdateUserForm
        id={id}
        username={username}
        email={email}
        password={password}
        phone={phone}
        role={role}
        status={status}
        address={address}
      />
    </Flex>
  );
};

export default SingleUserPage;
