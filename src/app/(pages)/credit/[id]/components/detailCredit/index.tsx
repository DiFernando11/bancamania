'use client'
import React from 'react'
import CreditIconName from '@/app/(pages)/credit/shared/creditIconName'
import { useGetInstallmentsCredit, useI18Text } from '@/application/hooks'
import { CardStatus, TypeCardCredit } from '@/shared'
import { formatMoney } from '@/shared/utils'
import { Box, Text } from '@/ui/atoms'
import { TextType } from '@/ui/atoms/text/types'
import {
  AlertErrorService,
  DetailTextSkeleton,
  SkeletonLoader,
} from '@/ui/organisms'
import { DetailCreditProps } from './types'

const DetailCredit = ({
  data,
  isLoading,
  isChecked,
  id,
}: DetailCreditProps) => {
  const t = useI18Text('tarjetas')
  const { data: dataInstallment, isError } = useGetInstallmentsCredit({
    creditId: id,
  })

  const totalAmount =
    !isError && typeof dataInstallment?.totalAmount === 'number'
      ? [
          {
            classSkeleton: 'w-36 h-5',
            textKey: t('consumptionDate'),
            textTypeKey: 'font_20_24_fw_bold_fm_rob_text-100' as TextType,
            textTypeValue: 'font_20_24_fw_bold_fm_rob_text-200' as TextType,
            textValue: formatMoney({
              showSymbol: true,
              value: dataInstallment?.totalAmount,
            }),
          },
        ]
      : []

  const items = [
    ...totalAmount,
    {
      classSkeleton: 'w-36 h-5',
      textKey: t('availableQuota'),
      textValue: formatMoney({ showSymbol: true, value: data?.quota }),
    },
    {
      classSkeleton: 'w-48 h-5',
      textKey: t('numberCardKey'),
      textValue: data?.cardNumber,
    },
    {
      classSkeleton: 'w-20 h-5',
      textKey: t('securityCode'),
      textValue: data?.cvv,
    },
    {
      textKey: t('expirationDate'),
      textValue: data?.expirationDate,
      width: 'w-52 h-5',
    },
    {
      classSkeleton: 'w-32 h-5',
      textKey: t('limit'),
      textValue: formatMoney({ value: data?.limit }),
    },
    {
      classSkeleton: 'w-32 h-5',
      textKey: t('miles'),
      textValue: data?.miles,
    },
    {
      classSkeleton: 'w-40 h-5',
      textKey: t('state'),
      textValue: isChecked ? t(CardStatus.ACTIVE) : t(CardStatus.BLOCKED),
    },
  ]

  return (
    <Box className='flex flex-col gap-4'>
      <SkeletonLoader isLoading={isLoading} classNameSkeleton='w-40 h-7'>
        <CreditIconName
          brand={(data?.brand as TypeCardCredit) || TypeCardCredit.MASTERCARD}
        >
          <Text textType='font_16_18_fw_bold_fm_rob'>
            {data?.version?.toLocaleUpperCase()}
          </Text>
        </CreditIconName>
      </SkeletonLoader>
      <AlertErrorService
        isError={isError}
        error={{ message: t('errorGetInstallmentAmount') }}
      />
      <DetailTextSkeleton isLoading={isLoading} items={items} />
    </Box>
  )
}

export default DetailCredit
