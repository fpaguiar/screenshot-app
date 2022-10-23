import { Box, HStack } from '@chakra-ui/react'
import PanelSettings from '../components/PanelSettings'
import React from 'react'

export default function Panel (): JSX.Element {
  return (
    <Box h="100%">
      <HStack h="100%" padding={2} bgColor="blue.200">
        <Box flex={2} h="100%" bgColor="white"></Box>
        <Box flex={1} h="100%" border="1px solid" padding={2}>
          <PanelSettings />
        </Box>
      </HStack>
    </Box>
  )
}
