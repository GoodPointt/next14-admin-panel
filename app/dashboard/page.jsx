import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Card from '../ui/dashboard/card/Card';
import Rightbar from '../ui/dashboard/rightbar/Rightbar';
import Transactions from '../ui/dashboard/transactions/Transactions';
import Chart from '../ui/dashboard/chart/Chart';

const Dashboard = () => {
  return (
    <Flex gap={3} mt={3}>
      <Flex flex={3} flexDirection={'column'} gap={3}>
        <Flex gap={3} justify={'space-between'}>
          <Card />
          <Card />
          <Card />
        </Flex>
        <Transactions />
        <Chart />
      </Flex>
      <Box flex={1}>
        <Rightbar />
      </Box>
    </Flex>
  );
};

export default Dashboard;
