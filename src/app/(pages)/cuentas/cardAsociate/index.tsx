import { useRouter } from 'next/navigation'
import React from 'react'
import { useGetCardDebit, useI18Text } from '@/application/hooks'
import { clientRoutes } from '@/routes/clientRoutes'
import { Box, Text } from '@/ui/atoms'
import { CardProduct } from '@/ui/organisms'

const CardAsociate = () => {
  const t = useI18Text('account')
  const { data, isLoading } = useGetCardDebit()
  const route = useRouter()

  return (
    <Box>
      <Text textType='font_16_18_fw_bold_fm_rob'>{t('associatedCard')}</Text>
      <CardProduct.BankingCard
        className='mt-2 bg-debit h-50 cursor-pointer'
        headerBankCard={<CardProduct.HeaderMasterCard />}
        textAccount={data?.cardNumber}
        isLoading={isLoading}
        onClick={() => route.push(clientRoutes.debit.path)}
      />
    </Box>
  )
}

export default CardAsociate
