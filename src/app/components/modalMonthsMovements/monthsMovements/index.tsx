import React from 'react'
import { Icon, Spinner } from '@/ui/atoms'
import { IconText } from '@/ui/molecules'
import { SelectedOption, SkeletonLoader } from '@/ui/organisms'
import { MonthsMovementsProps } from './types'

const MonthsMovements = ({
  onClick,
  loadingSelected,
  text,
  isLoading,
}: MonthsMovementsProps) => {
  return (
    <SkeletonLoader isLoading={isLoading} classNameSkeleton='h-10'>
      <SelectedOption
        onClick={onClick}
        ComponentAction={
          loadingSelected ? (
            <Spinner sizeSpinner='w-4 h-4' />
          ) : (
            <Icon name='Download' className='w-5 h-5' />
          )
        }
      >
        <IconText nameIcon='Statement' text={text} classIcon='w-5 h-5' />
      </SelectedOption>
    </SkeletonLoader>
  )
}

export default MonthsMovements
