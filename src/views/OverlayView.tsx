import { Box } from '@chakra-ui/react'
import Overlay from '../components/Overlay'
import React from 'react'

export default function OverlayView (): JSX.Element {
  return (
    <Box
      h="100%"
      backgroundColor="blackAlpha.500"
    >
      <Overlay />
    </Box>
  )
}
