'use client'
import React from 'react'
import { useGetCardDebit, useI18Text } from '@/application/hooks'
import { clientRoutes } from '@/routes/clientRoutes'
import { useNavigation } from '@/shared/hooks'
import { Text } from '@/ui/atoms'
import { IconText } from '@/ui/molecules'
import { SelectedOption } from '@/ui/organisms'

const CardsDebit = () => {
  const t = useI18Text('tarjetas')
  const router = useNavigation()
  const { data } = useGetCardDebit()

  return (
    <>
      <Text textType='font_20_24_fw_bold_fm_rob_text-100'>
        {t('debitCard')}
      </Text>
      <SelectedOption onClick={() => router.push(clientRoutes.debit.path)}>
        <IconText
          classText='break-all'
          textType='font_16_18_fw_bold_fm_rob'
          nameIcon='MasterCard'
          classIcon='w-10 h-10 min-w-10'
          text={t('numberCard', { number: data?.cardNumber })}
        />
      </SelectedOption>
    </>
  )
}

export default CardsDebit
