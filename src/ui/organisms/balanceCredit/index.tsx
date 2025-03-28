import React from 'react'
import { useI18Text } from '@/application/hooks'
import { formatMoney } from '@/shared/utils'
import { Box, Text } from '@/ui/atoms'
import { BitcoinSymbol } from '@/ui/molecules'

const BalanceCredit = ({
  isBitcoin,
  miles,
  quota,
}: {
  isBitcoin: boolean
  miles?: number
  quota?: number
}) => {
  const t = useI18Text('tarjetas')

  return (
    <>
      {isBitcoin ? (
        <Box>
          <Text className='text-center' textType='font_16_fw_bold_fm_rob'>
            {t('quota')}
          </Text>
          <BitcoinSymbol
            classIcon='w-5 h-5'
            balance={formatMoney({ value: quota })}
            textType='font_20_fw_bold_fm_rob'
          />
        </Box>
      ) : (
        <Text textType='font_20_fw_bold_fm_rob'>
          {t('milesBalance', { miles })}
        </Text>
      )}
    </>
  )
}

export default BalanceCredit
