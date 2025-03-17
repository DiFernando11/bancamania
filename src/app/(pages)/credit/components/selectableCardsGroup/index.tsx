'use client'

import React, { forwardRef } from 'react'
import { useGetDataByKey, useI18Text } from '@/application/hooks'
import { GetOffertsResponse, TypeCardCredit } from '@/shared'
import { GET_OFFERTS_CREDIT } from '@/shared/utils/constantsQuery'
import { Box } from '@/ui/atoms'
import { IconText } from '@/ui/molecules'
import { SelectedBox } from '@/ui/organisms'
import { SelectableCardsGroupProps } from './types'

const SelectableCardsGroup = forwardRef<
  HTMLDivElement,
  SelectableCardsGroupProps
>(({ value, onChange }, ref) => {
  const t = useI18Text('tarjetas')
  const data = useGetDataByKey<GetOffertsResponse>([GET_OFFERTS_CREDIT])

  return (
    <Box ref={ref} className='flex flex-col gap-8'>
      {data?.newCards?.map(card => (
        <SelectedBox
          key={card.id}
          value={card.marca}
          onChange={onChange}
          selectedValue={value}
        >
          <IconText
            nameIcon={
              card.marca === TypeCardCredit.MASTERCARD ? 'MasterCard' : 'Visa'
            }
            text={t('masterBenefit')}
            classIcon='w-12 h-12 min-w-12'
          />
        </SelectedBox>
      ))}
    </Box>
  )
})

SelectableCardsGroup.displayName = 'SelectableCardsGroup'

export default SelectableCardsGroup
