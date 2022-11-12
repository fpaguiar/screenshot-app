import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { SketchPicker } from 'react-color'

interface Props {
  colour: string
  onChange: (colour: string) => void
}

function normalizeHexColor (color: string): string {
  return color.substring(1)
}

export default function ColorPicker (props: Props): JSX.Element {
  const [isVisible, setIsVisible] = useState(false)

  const handleColourChange = (newColour: string): void => {
    props.onChange(newColour)
  }

  return (
    <HStack>
      <InputGroup>
        <InputLeftAddon>#</InputLeftAddon>
        <Input
          onChange={(event) => handleColourChange(event.currentTarget.value)}
          value={props.colour}
          placeholder='000000'
          max={6}
          w={100}
        />
      </InputGroup>
      <Popover>
        <PopoverTrigger>
          <Button onClick={() => setIsVisible(!isVisible)} bg={`#${props.colour}`} _hover={{}} />
        </PopoverTrigger>
        <Portal>
          <PopoverContent
            bgColor="transparent"
            shadow="none"
            w="fit-content"
            border="none"
          >
            <PopoverBody>
              <SketchPicker
                color={props.colour}
                onChange={(colour) => handleColourChange(normalizeHexColor(colour.hex))}
              />
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    </HStack>

  )
}
