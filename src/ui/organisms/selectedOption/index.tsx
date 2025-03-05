'use client'
import classNames from 'classnames'
import React, { useState } from 'react'
import { Box } from '@/ui/atoms'
import { ArrowIconHover } from '@/ui/molecules'
import { SelectedOptionProps } from './types'

const SelectedOption = ({
  className,
  onClick,
  children,
  ComponentAction,
}: SelectedOptionProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Box
      className={classNames(
        className,
        'flex w-full cursor-pointer justify-between capitalize',
        'items-center border-b border-accent-100 pb-4'
      )}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {ComponentAction ?? (
        <ArrowIconHover
          color='#2e7d32'
          className='w-4 h-4 -rotate-90'
          isHovered={isHovered}
        />
      )}
    </Box>
  )
}

export default SelectedOption
