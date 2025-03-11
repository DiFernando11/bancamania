import React from 'react'
import { useGetCardDebit, useI18Text } from '@/application/hooks'
import { clientRoutes } from '@/routes/clientRoutes'
import { useNavigation } from '@/shared/hooks'
import { Box, Text } from '@/ui/atoms'
import { CardProduct } from '@/ui/organisms'

const CardAsociate = () => {
  const t = useI18Text('account')
  const { data, isLoading } = useGetCardDebit()
  const route = useNavigation()

  return (
    <Box>
      <Text textType='font_16_18_fw_bold_fm_rob'>{t('associatedCard')}</Text>
      <Box className='h-50'>
        <CardProduct.BankingCard
          className='mt-2 bg-debit cursor-pointer'
          headerBankCard={<CardProduct.HeaderMasterCard />}
          textAccount={data?.cardNumber}
          isLoading={isLoading}
          onClick={() => route.push(clientRoutes.debit.path)}
        />
      </Box>
    </Box>
  )
}

export default CardAsociate
