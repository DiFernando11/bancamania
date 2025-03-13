import classNames from 'classnames'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import { GetCardResponse } from '@/shared'
import { Box, Text } from '@/ui/atoms'
import { PairText } from '@/ui/molecules'
import { SkeletonLoader } from '@/ui/organisms'
import { DebitCardStatus } from '../../types'

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

  return (
    <Box
      className={classNames({
        'space-y-1': !isLoading,
        'space-y-2': isLoading,
      })}
    >
      <SkeletonLoader isLoading={isLoading} classNameSkeleton='h-5 w-48'>
        <Text textType='font_18_fw_bold_fm_rob'>
          {t('numberCard', { number: data?.cardNumber })}
        </Text>
      </SkeletonLoader>
      <SkeletonLoader isLoading={isLoading} classNameSkeleton='h-5 w-20'>
        <PairText
          className='!justify-start'
          textTypeKey='font_16_18_fw_bold_fm_rob'
          textTypeValue='font_16_18_fm_rob'
          textKey={t('securityCode')}
          textValue={data?.cvv ?? ''}
        />
      </SkeletonLoader>
      <SkeletonLoader isLoading={isLoading} classNameSkeleton='h-5 w-48'>
        <PairText
          className='!justify-start'
          textTypeKey='font_16_18_fw_bold_fm_rob'
          textTypeValue='font_16_18_fm_rob'
          textKey={t('expirationDate')}
          textValue={data?.expirationDate ?? ''}
        />
      </SkeletonLoader>
      <SkeletonLoader isLoading={isLoading} classNameSkeleton='h-5 w-32'>
        <PairText
          className='!justify-start'
          textTypeKey='font_16_18_fw_bold_fm_rob'
          textTypeValue='font_16_18_fm_rob'
          textKey={t('state')}
          textValue={
            isChecked
              ? t(DebitCardStatus.ACTIVE)
              : data?.status === DebitCardStatus.INACTIVE
                ? t(DebitCardStatus.INACTIVE)
                : t(DebitCardStatus.BLOCKED)
          }
        />
      </SkeletonLoader>
    </Box>
  )
}

export default DataDebit
