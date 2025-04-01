import React from 'react'
import { Icon, Spinner } from '@/ui/atoms'
import { IconText } from '@/ui/molecules'
import { SelectedOption } from '@/ui/organisms'
import { MonthsMovementsProps } from './types'

const MonthsMovements = ({
  onClick,
  loadingSelected,
  text,
}: MonthsMovementsProps) => {
  return (
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
  )
}

export default MonthsMovements
