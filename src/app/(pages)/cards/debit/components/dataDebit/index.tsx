import classNames from 'classnames'
import React from 'react'
import { useGetCardDebit, useI18Text } from '@/application/hooks'
import { Box, Text } from '@/ui/atoms'
import { PairText } from '@/ui/molecules'
import { SkeletonLoader } from '@/ui/organisms'

const DataDebit = () => {
  const { data, isLoading } = useGetCardDebit()
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
          textTypeValue='font_18_fm_rob'
          textKey={t('securityCode')}
          textValue={data?.cvv ?? ''}
        />
      </SkeletonLoader>
      <SkeletonLoader isLoading={isLoading} classNameSkeleton='h-5 w-48'>
        <PairText
          className='!justify-start'
          textTypeKey='font_16_18_fw_bold_fm_rob'
          textTypeValue='font_18_fm_rob'
          textKey={t('expirationDate')}
          textValue={data?.expirationDate ?? ''}
        />
      </SkeletonLoader>
      <SkeletonLoader isLoading={isLoading} classNameSkeleton='h-5 w-32'>
        <PairText
          className='!justify-start'
          textTypeKey='font_16_18_fw_bold_fm_rob'
          textTypeValue='font_18_fm_rob'
          textKey={t('state')}
          textValue={data?.status ?? ''}
        />
      </SkeletonLoader>
    </Box>
  )
}

export default DataDebit
