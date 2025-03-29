'use client'
import React, { forwardRef } from 'react'
import CreditIconName from '@/app/(pages)/credit/shared/creditIconName'
import { useGetDataByKey, useI18Text } from '@/application/hooks'
import { GetOffertsResponse } from '@/shared'
import { GET_OFFERTS_CREDIT } from '@/shared/utils/constantsQuery'
import { Box, Text } from '@/ui/atoms'
import { PairText } from '@/ui/molecules'
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
          value={card.brand}
          onChange={onChange}
          selectedValue={value}
        >
          <CreditIconName brand={card.brand}>
            <Text textType='font_16_18_fw_bold_fm_rob'>{`${card.version}`}</Text>
            <Text>{card.textOffert}</Text>
            <PairText
              className='!justify-start !gap-2'
              textKey={t('limit')}
              textValue={`${card.limit} ₿`}
            />
          </CreditIconName>
        </SelectedBox>
      ))}
    </Box>
  )
})

SelectableCardsGroup.displayName = 'SelectableCardsGroup'

export default SelectableCardsGroup
