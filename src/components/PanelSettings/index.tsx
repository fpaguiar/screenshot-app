import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  VStack
} from '@chakra-ui/react'
import ColorPicker from '../base/ColorPicker'
import Radio from '../base/Radio'
import React, { useState } from 'react'
// import { useForm } from 'react-hook-form'

// type Inputs = {
//   borderWidth: number
//   borderRadius: number
//   borderColor: string
//   shadowType: string
//   shadowColor: string
//   rotationType: string
// }

type ShadowStyle = 'None' | 'Light' | 'Moderate' | 'Strong'
type Rotation = 0 | 90 | -90 | 180

function PanelSettings (): JSX.Element {
  // const { handleSubmit, register } = useForm<Inputs>()
  const [borderWidth, setBorderWidth] = useState(1)
  const [borderRadius, setBorderRadius] = useState(0)
  const [borderColour, setBorderColour] = useState('000000')
  const [shadowStyle, setShadowStyle] = useState<ShadowStyle>('None')
  const [shadowColour, setShadowColour] = useState('000000')
  const [rotation, setRotation] = useState<Rotation>(0)

  return (
    <VStack spacing="24px" align="start">
      <Box>
        <Heading size="md" mb={1}>Border</Heading>
        <HStack spacing={2}>
          <FormControl>
            <FormLabel>Width</FormLabel>
            <NumberInput defaultValue={0} max={30} clampValueOnBlur={false}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl>
            <FormLabel>Radius</FormLabel>
            <NumberInput defaultValue={0} max={30} clampValueOnBlur={false}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl>
            <FormLabel>Color</FormLabel>
            <ColorPicker
              colour={borderColour}
              onChange={setBorderColour}
            />
          </FormControl>
        </HStack>
      </Box>
      <Box>
      <Heading size="md" mb={1}>Shadow</Heading>
        <Radio
          direction="column"
          options={[
            { label: 'None', value: 'none' },
            { label: 'Light', value: 'light' },
            { label: 'Moderate', value: 'moderate' },
            { label: 'Strong', value: 'strong' }
          ]}
        />
        <ColorPicker
          colour={shadowColour}
          onChange={setShadowColour}
        />
      </Box>
      <Box>
      <Heading size="md" mb={1}>Rotation</Heading>
        <Radio
          direction="column"
          options={[
            { label: 'None', value: 0 },
            { label: '90˚ (clock-wise)', value: 90 },
            { label: '90˚ (counterclock-wise)', value: -90 },
            { label: '180˚', value: 180 }
          ]}
        />
      </Box>
      <Box>
        <Stack direction="row" justifyContent="space-around">
          <Button width="100px">Ok</Button>
          <Button width="100px">Cancel</Button>
        </Stack>
      </Box>
    </VStack>
  )
}

export default PanelSettings
