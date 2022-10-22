import React from 'react';
import { Box, Button, Flex, Heading, VStack, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, Stack } from '@chakra-ui/react';
import Radio from '../base/Radio';
import ColorPicker from '../base/ColorPicker';

function PanelSettings() {
  return (
    <VStack spacing="24px" align="start">
      <Box>
        <Heading size="md" mb={1}>Border</Heading>
        <Flex>
          <Select placeholder='Size'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
          <NumberInput defaultValue={0} max={30} clampValueOnBlur={false}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Input placeholder='#000000' />
        </Flex>
      </Box>
      <Box>
      <Heading size="md" mb={1}>Shadow</Heading>
        <Radio
          direction="column"
          options={[
            { label: 'None', value: 'none' },
            { label: 'Light', value: 'light' },
            { label: 'Moderate', value: 'moderate' },
            { label: 'Strong', value: 'strong' },
          ]}
        />
        <ColorPicker color="484932" onChange={() => {}} />
      </Box>
      <Box>
      <Heading size="md" mb={1}>Rotation</Heading>
        <Radio
          direction="column"
          options={[
            { label: 'None', value: 0 },
            { label: '90˚ (clock-wise)', value: 90 },
            { label: '90˚ (counterclock-wise)', value: -90 },
            { label: '180˚', value: 180 },
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
  );
}

export default PanelSettings;
