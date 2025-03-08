import React from 'react'
import { FieldError } from 'react-hook-form'
import { Text } from '@/ui/atoms'
import { AnimationVisible } from '@/ui/molecules'

const TextError = ({
  isValidate,
  error,
  id,
}: {
  error?: FieldError
  isValidate: boolean
  id: string
}) => {
  return (
    <AnimationVisible isVisible={isValidate}>
      <Text id={id} textType='font_14_fw_bold_fm_rob' className='text-error'>
        {error?.message}
      </Text>
    </AnimationVisible>
  )
}

export default TextError
