'use client'

import React, { forwardRef } from 'react'
import { useI18Text } from '@/application/hooks'
import { Box } from '@/ui/atoms'
import { IconText } from '@/ui/molecules'
import { SelectedBox } from '@/ui/organisms'
import { SelectableCardsGroupProps } from './types'

const SelectableCardsGroup = forwardRef<
  HTMLDivElement,
  SelectableCardsGroupProps
>(({ value, onChange }, ref) => {
  const t = useI18Text('tarjetas')

  return (
    <Box ref={ref} className='flex flex-col gap-8'>
      <SelectedBox value='visa' onChange={onChange} selectedValue={value}>
        <IconText
          nameIcon='Visa'
          text={t('masterBenefit')}
          classIcon='w-12 h-12 min-w-12'
        />
      </SelectedBox>
      <SelectedBox value='mastercard' onChange={onChange} selectedValue={value}>
        <IconText
          nameIcon='MasterCard'
          text={t('visaBenefit')}
          classIcon='w-12 h-12 min-w-12'
        />
      </SelectedBox>
    </Box>
  )
})

SelectableCardsGroup.displayName = 'SelectableCardsGroup'

export default SelectableCardsGroup
