import classNames from 'classnames'
import React from 'react'
import { FieldError } from 'react-hook-form'
import { ScrollIntoView, Text } from '@/ui/atoms'
import { AnimationVisible } from '@/ui/molecules'

const TextError = ({
  isValidate,
  error,
  id,
  className,
}: {
  error?: FieldError
  isValidate: boolean
  id: string
  className?: string
}) => {
  return (
    <AnimationVisible isVisible={isValidate}>
      <ScrollIntoView isVisible={isValidate}>
        <Text
          id={`error-${id}`}
          textType='font_14_fw_bold_fm_rob'
          className={classNames('text-error', className)}
        >
          {error?.message}
        </Text>
      </ScrollIntoView>
    </AnimationVisible>
  )
}

export default TextError
