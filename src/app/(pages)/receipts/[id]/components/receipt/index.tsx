'use client'
import classNames from 'classnames'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import { Box, Icon, Text } from '@/ui/atoms'
import { SkeletonLoader } from '@/ui/organisms'
import SkeletonReceiptByUUID from '../skeleton'
import DataReceipt from './dataReceipt'
import { ReceiptProps } from './types'

const Receipt = ({ data, isLoading }: ReceiptProps) => {
  const { title, id, dataReceipts, createdAt } = data || {}
  const tRec = useI18Text('receipts')
  const t = useI18Text()

  return (
    <Box id='comprobante' className='flex flex-col gap-6 pb-4'>
      <Box>
        <Box
          className={classNames(
            'flex gap-2 w-full justify-center items-center border-b border-primary-100 pb-2'
          )}
        >
          <Icon name='Logo' className='w-8 h-8' />
          <Text
            textType='font_20_fw_bold_fm_rob_text-200'
            className='text-center'
          >
            {t('titlePage')}
          </Text>
        </Box>
        <Box className='flex justify-center flex-col items-center'>
          <Icon name='Success' className='w-16 h-16 mt-2' />
          <SkeletonLoader
            isLoading={isLoading}
            classNameSkeleton='h-6 w-full max-w-72'
          >
            <Text textType='font_24_fw_bold_fm_rob'>{title}</Text>
          </SkeletonLoader>
          <SkeletonLoader
            isLoading={isLoading}
            classNameSkeleton='h-4 mt-1 w-full max-w-96'
          >
            <Text textType='font_16_fm_rob' className='text-center'>
              {tRec('nrReceipt', { nro: id })}
            </Text>
          </SkeletonLoader>
        </Box>
      </Box>
      <SkeletonLoader isLoading={isLoading} classNameSkeleton='h-4 mt-1 w-44'>
        <Text textType='font_16_fw_bold_fm_rob'>
          {t('date', { date: createdAt })}
        </Text>
      </SkeletonLoader>
      <Box>
        {isLoading ? (
          <SkeletonReceiptByUUID />
        ) : (
          dataReceipts?.map(({ key, value, style }, index) => (
            <DataReceipt
              key={index}
              hr={style?.hr}
              keyText={key}
              value={value}
            />
          ))
        )}
      </Box>
    </Box>
  )
}

export default Receipt
