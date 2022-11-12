
import { Radio as CRadio, RadioGroup, Stack } from '@chakra-ui/react'
import React from 'react'
import type { StackDirection } from '@chakra-ui/react'

interface Props<T> {
  name?: string
  id?: string
  direction?: StackDirection
  selected: T
  options: Array<{
    label: string
    value: T
  }>
  onChange: (value: T) => void
}

export default function Radio <T extends string> ({
  direction = 'row',
  id,
  name,
  options,
  selected,
  onChange
}: Props<T>): JSX.Element {
  return (
    <RadioGroup
      value={selected}
      id={id}
      name={name}
      onChange={onChange}
    >
      <Stack direction={direction}>
        {options.map(o => (
          <CRadio key={o.value} value={o.value}>{o.label}</CRadio>
        ))}
      </Stack>
    </RadioGroup>
  )
};
