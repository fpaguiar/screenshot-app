
import type { StackDirection } from '@chakra-ui/react'
import { Radio as CRadio, RadioGroup, Stack } from '@chakra-ui/react'
import { useState } from 'react'

interface Props {
  name?: string
  id?: string
  direction?: StackDirection
  options: Array<{
    label: string
    value: string | number
  }>
}

export default function Radio ({
  direction = 'row',
  id,
  name,
  options
}: Props) {
  const [value, setValue] = useState(options[0].value)

  return (
    <RadioGroup
      value={value}
      id={id}
      name={name}
      onChange={setValue}
    >
      <Stack direction={direction}>
        {options.map(o => (
          <CRadio key={o.value} value={o.value}>{o.label}</CRadio>
        ))}
      </Stack>
    </RadioGroup>
  )
};
