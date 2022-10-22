import React from 'react';
import { Box, Container, Flex, HStack, Spacer } from '@chakra-ui/react';
import PanelSettings from '../components/PanelSettings';

export default function Panel() {
  return (
    <Box h="100%">
      <HStack h="100%" padding={2} bgColor="blue.200">
        <Box flex={2} h="100%" bgColor="white"></Box>
        <Box flex={1} h="100%" border="1px solid" padding={2}>
          <PanelSettings />
        </Box>
      </HStack>
    </Box>
  );
}
