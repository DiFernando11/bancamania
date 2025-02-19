import React from 'react'
import { NameOwnerProps } from './types'
import TextLoading from '../../textLoading'

const NameOwner = ({
  isLoading,
  name,
  textType = 'font_18_fw_bold_fm_rob',
  classNameSkeleton = 'h-4 w-24',
}: NameOwnerProps) => {
  return (
    <TextLoading
      classNameSkeleton={classNameSkeleton}
      text={name}
      isLoading={isLoading}
      textType={textType}
    />
  )
}

export default NameOwner
