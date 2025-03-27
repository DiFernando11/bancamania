'use client'

import Image from 'next/image'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import { Box, Text } from '@/ui/atoms'
import { Card, CounterInput, ImageLoad } from '@/ui/molecules'
import { CardProductProps } from './types'

const CardProduct = ({
  image,
  title,
  value,
  onChange,
  price,
}: CardProductProps) => {
  const t = useI18Text('store')

  return (
    <Card className='gap-4 flex-col'>
      <Text className='break-all block sm:hidden'>{title}</Text>
      <Box className='flex gap-4 justify-between'>
        <Box className='flex gap-4 items-center'>
          <ImageLoad
            alt={title}
            className='rounded-full shadow-2xl border-2 border-primary-100'
            src={image}
            width={40}
            height={40}
          />
          <Text className='break-all hidden sm:block'>{title}</Text>
        </Box>
        <Box className='flex items-center gap-4'>
          <Box>
            <Text
              textType='font_12_14_fw_bold_fm_rob'
              className='whitespace-nowrap'
            >
              {t('unitPrice', { unit: price })}
            </Text>
            <Text
              textType='font_12_14_fw_bold_fm_rob'
              className='whitespace-nowrap'
            >
              {t('unitTotal', { unit: (Number(price) * value).toFixed(2) })}
            </Text>
          </Box>
          <CounterInput value={value} onChange={onChange} min={1} max={10} />
        </Box>
      </Box>
    </Card>
  )
}

export default CardProduct
