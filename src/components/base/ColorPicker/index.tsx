import { SketchPicker } from 'react-color'

import type { ColorChangeHandler, Color } from 'react-color'
import { useState } from 'react'
import { HStack, Button, Input, InputGroup, InputLeftAddon, Popover, PopoverContent, PopoverBody, PopoverTrigger } from '@chakra-ui/react'

interface Props {
  color: string
  onChange: ColorChangeHandler
}

export default function ColorPicker (props: Props) {
  const [isVisible, setIsVisible] = useState(false)
  const [color, setColor] = useState(props.color)

  return (
    <HStack>
      <InputGroup>
        <InputLeftAddon>#</InputLeftAddon>
        <Input placeholder='000000' max={6} w={100}/>
      </InputGroup>
      <Popover>
        <PopoverTrigger>
          <Button onClick={() => setIsVisible(!isVisible)} bg={`#${color}`} _hover={{}} />
        </PopoverTrigger>
        <PopoverContent
          bgColor="transparent"
          shadow="none"
          w="fit-content"
          border="none"
        >
          <PopoverBody>
            <SketchPicker
              color={color}
              onChange={(color) => setColor(color.hex)}
            />
          </PopoverBody>
        </PopoverContent>
        </Popover>
    </HStack>

  )
}
