'use client'
import classNames from 'classnames'
import React from 'react'
import { Box } from '@/ui/atoms'
import { PairText } from '@/ui/molecules'
import SkeletonLoader from '../skeletonLoader'
import { DetailCreditListProps } from './types'

const DetailTextSkeleton = ({ isLoading, items }: DetailCreditListProps) => {
  return (
    <Box
      className={classNames({
        'space-y-1': !isLoading,
        'space-y-3': isLoading,
      })}
    >
      {items.map(
        (
          {
            textKey,
            textValue,
            textTypeKey = 'font_16_18_fw_bold_fm_rob',
            textTypeValue = 'font_16_18_fm_rob',
            className = '!justify-start',
            classSkeleton = 'h-5 w-44',
          },
          index
        ) => (
          <SkeletonLoader
            key={index}
            isLoading={isLoading}
            classNameSkeleton={classSkeleton}
          >
            <PairText
              className={className}
              textTypeKey={textTypeKey}
              textTypeValue={textTypeValue}
              textKey={textKey}
              textValue={textValue ?? ''}
            />
          </SkeletonLoader>
        )
      )}
    </Box>
  )
}

export default DetailTextSkeleton
