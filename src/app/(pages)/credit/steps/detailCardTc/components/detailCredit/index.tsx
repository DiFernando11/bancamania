'use client'
import React from 'react'
import CreditIconName from '@/app/(pages)/credit/shared/creditIconName'
import { useI18Text } from '@/application/hooks'
import { CardStatus, TypeCardCredit } from '@/shared'
import { Box, Text } from '@/ui/atoms'
import { DetailTextSkeleton, SkeletonLoader } from '@/ui/organisms'
import { DetailCreditProps } from './types'

const DetailCredit = ({ data, isLoading, isChecked }: DetailCreditProps) => {
  const t = useI18Text('tarjetas')

  const items = [
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
    { classSkeleton: 'w-32 h-5', textKey: t('limit'), textValue: data?.limit },
    { classSkeleton: 'w-32 h-5', textKey: t('miles'), textValue: data?.miles },
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
      <DetailTextSkeleton isLoading={isLoading} items={items} />
    </Box>
  )
}

export default DetailCredit
