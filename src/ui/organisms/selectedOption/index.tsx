import classNames from 'classnames'
import React from 'react'
import { Box, Icon, Text } from '@/ui/atoms'
import { IconText } from '@/ui/molecules'
import { SelectedOptionProps } from './types'
import SkeletonLoader from '../skeletonLoader'

const SelectedOption = ({
  text,
  className,
  textType,
  classIcon = 'w-5 h-5',
  onClick,
  isLoading,
  classNameSkeleton,
  IconAction = <Icon name='Arrown' className='w-4 h-4 -rotate-90' />,
}: SelectedOptionProps) => {
  return (
    <SkeletonLoader isLoading={isLoading} classNameSkeleton={classNameSkeleton}>
      <Box
        className={classNames(
          className,
          'flex w-full cursor-pointer justify-between capitalize',
          'items-center border-b border-accent-100 pb-4'
        )}
        onClick={onClick}
      >
        <IconText
          classIcon={classIcon}
          nameIcon='Statement'
          text={text}
          textType={textType}
          iconColor='white'
        />
        {IconAction}
      </Box>
    </SkeletonLoader>
  )
}

export default SelectedOption
