'use client'
import React from 'react'
import CreditIconName from '@/app/(pages)/credit/shared/creditIconName'
import { useGetCardCreditID, useI18Text } from '@/application/hooks'
import { CardStatus, TypeCardCredit } from '@/shared'
import { Box, Text } from '@/ui/atoms'
import { DetailTextSkeleton, SkeletonLoader } from '@/ui/organisms'
import { DetailCreditProps } from './types'

const DetailCredit = ({ stepData }: DetailCreditProps) => {
  const { data, isLoading } = useGetCardCreditID({ creditID: stepData.id })
  const t = useI18Text('tarjetas')

  const items = [
    {
      classSkeleton: 'w-48 h-4',
      textKey: t('numberCardKey'),
      textValue: data?.cardNumber,
    },
    {
      classSkeleton: 'w-48 h-4',
      textKey: t('version'),
      textValue: data?.version,
    },
    {
      classSkeleton: 'w-20 h-4',
      textKey: t('securityCode'),
      textValue: data?.cvv,
    },
    {
      textKey: t('expirationDate'),
      textValue: data?.expirationDate,
      width: 'w-48 h-4',
    },
    { classSkeleton: 'w-48 h-4', textKey: t('limit'), textValue: data?.limit },
    { classSkeleton: 'w-48 h-4', textKey: t('miles'), textValue: data?.miles },
    {
      classSkeleton: 'w-32 h-4',
      textKey: t('state'),
      textValue: t(CardStatus.ACTIVE),
    },
  ]

  return (
    <Box className='flex flex-col gap-4'>
      <SkeletonLoader isLoading={isLoading} classNameSkeleton='w-40 h-5'>
        <CreditIconName
          marca={(data?.marca as TypeCardCredit) || TypeCardCredit.MASTERCARD}
        >
          <Text textType='font_16_18_fw_bold_fm_rob'>
            {data?.marca?.toLocaleUpperCase()}
          </Text>
        </CreditIconName>
      </SkeletonLoader>
      <DetailTextSkeleton isLoading={isLoading} items={items} />
    </Box>
  )
}

export default DetailCredit
