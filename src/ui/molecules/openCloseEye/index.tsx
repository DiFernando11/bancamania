'use client'
import classNames from 'classnames'
import React from 'react'
import { Box, Icon } from '@/ui/atoms'
import { OpenCloseEyesProps } from './types'

const OpenCloseEye = ({
  setIsShow,
  isShow,
  className,
  iconClass,
}: OpenCloseEyesProps) => {
  return (
    <Box
      className={classNames('cursor-pointer', className)}
      onClick={event => {
        event.stopPropagation()
        setIsShow(!isShow)
      }}
    >
      <Icon name={isShow ? 'EyeOpen' : 'EyeClose'} className={iconClass} />
    </Box>
  )
}

export default OpenCloseEye
