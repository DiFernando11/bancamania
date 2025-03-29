'use client'
import classNames from 'classnames'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import { formatDateReplace, formatMoney } from '@/shared/utils'
import { Box, Text } from '@/ui/atoms'
import { BitcoinSymbol, Card, IconText } from '@/ui/molecules'

const Installments = ({
  description,
  installmentNumber,
  totalInstallments,
  dayOfpurchase,
  totalToPay,
  isOverdue,
  overdueDays,
  lateFee,
  amount,
}: {
  description: string
  installmentNumber: number
  totalInstallments: number
  dayOfpurchase: Date
  totalToPay: number
  isOverdue: boolean
  overdueDays: number
  lateFee: number
  amount: number
}) => {
  const t = useI18Text('tarjetas')

  return (
    <Card
      className={classNames('flex justify-between items-center gap-4 ', {
        'warning-gradient': isOverdue,
      })}
    >
      <Box>
        <Text>{description}</Text>
        <Text textType='font_16_fw_bold_fm_rob'>
          {t('quotaNumber', {
            quota: `${installmentNumber}/${totalInstallments}`,
          })}
        </Text>
        <Text textType='font_12_fm_rob'>
          {t('movementDate', {
            date: formatDateReplace(dayOfpurchase, 'dd MMM yyyy'),
          })}
        </Text>
        {isOverdue && (
          <>
            <Box className='my-2'>
              <IconText
                textType='font_16_fw_bold_fm_rob'
                text={t('daysLate', { days: overdueDays })}
                nameIcon='Warning'
                classIcon='w-5 h-5 text-yellow-500 min-w-5'
              />
            </Box>
            <Text textType='font_12_fm_rob'>
              {t('interestGenerated', {
                interest: formatMoney({ showSymbol: true, value: lateFee }),
              })}
            </Text>
            <Text textType='font_12_fm_rob'>
              {t('originAmount', {
                amount: formatMoney({ showSymbol: true, value: amount }),
              })}
            </Text>
          </>
        )}
      </Box>
      <Box>
        <BitcoinSymbol
          balance={formatMoney({ value: totalToPay })}
          textType='font_24_fw_bold_fm_rob'
          classIcon='w-6 h-6'
        />
      </Box>
    </Card>
  )
}

export default Installments
