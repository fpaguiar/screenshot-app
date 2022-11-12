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
import React, { FormEvent, useState } from 'react'
import ColorPicker from '../base/ColorPicker'
import Radio from '../base/Radio'

type ShadowStyle = 'None' | 'Light' | 'Moderate' | 'Strong'
type Rotation = '0' | '90' | '-90' | '180'

function PanelSettings (): JSX.Element {
  const [borderWidth, setBorderWidth] = useState(1)
  const [borderRadius, setBorderRadius] = useState(0)
  const [borderColour, setBorderColour] = useState('000000')
  const [shadowStyle, setShadowStyle] = useState<ShadowStyle>('None')
  const [shadowColour, setShadowColour] = useState('000000')
  const [rotation, setRotation] = useState<Rotation>('0')

  const handleSubmit = (_event: FormEvent): boolean => {
    console.log({
      borderWidth,
      borderRadius,
      borderColour,
      shadowStyle,
      shadowColour,
      rotation
    })

    return false
  }

  return (
    <VStack spacing="24px" align="start">
      <Box>
        <Heading size="md" mb={1}>Border</Heading>
        <HStack spacing={2}>
          <FormControl>
            <FormLabel>Width</FormLabel>
            <NumberInput
              value={borderWidth}
              onChange={(_, value) => setBorderWidth(value)}
              max={30}
              min={0}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl>
            <FormLabel>Radius</FormLabel>
            <NumberInput
              value={borderRadius}
              onChange={(_, value) => setBorderRadius(value)}
              max={16}
              min={0}
            >
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
          selected={shadowStyle}
          onChange={setShadowStyle}
          options={[
            { label: 'None', value: 'None' },
            { label: 'Light', value: 'Light' },
            { label: 'Moderate', value: 'Moderate' },
            { label: 'Strong', value: 'Strong' }
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
          selected={rotation}
          onChange={setRotation}
          options={[
            { label: 'None', value: '0' },
            { label: '90˚ (clock-wise)', value: '90' },
            { label: '90˚ (counterclock-wise)', value: '-90' },
            { label: '180˚', value: '180' }
          ]}
        />
      </Box>
      <Box>
        <Stack direction="row" justifyContent="space-around">
          <Button
            width="100px"
            onClick={handleSubmit}
          >
            Save
          </Button>
          <Button width="100px">Cancel</Button>
        </Stack>
      </Box>
    </VStack>
  )
}

export default PanelSettings
