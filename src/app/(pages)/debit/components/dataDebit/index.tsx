import React from 'react'
import { useI18Text } from '@/application/hooks'
import { CardStatus, GetCardResponse } from '@/shared'
import { DetailTextSkeleton } from '@/ui/organisms'

const DataDebit = ({
  data,
  isLoading,
  isChecked,
}: {
  data?: GetCardResponse
  isLoading: boolean
  isChecked: boolean
}) => {
  const t = useI18Text('tarjetas')

  const items = [
    {
      classSkeleton: 'h-5 w-48',
      textKey: t('numberCardKey'),
      textValue: data?.cardNumber,
    },
    {
      classSkeleton: 'h-5 w-20',
      textKey: t('securityCode'),
      textValue: data?.cvv,
    },
    {
      textKey: t('expirationDate'),
      textValue: data?.expirationDate,
      width: 'w-48 h-5',
    },
    {
      classSkeleton: 'h-5 w-32',
      textKey: t('state'),
      textValue: isChecked
        ? t(CardStatus.ACTIVE)
        : data?.status === CardStatus.INACTIVE
          ? t(CardStatus.INACTIVE)
          : t(CardStatus.BLOCKED),
    },
  ]

  return <DetailTextSkeleton items={items} isLoading={isLoading} />
}

export default DataDebit
