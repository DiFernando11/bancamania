'use client'

import Image from 'next/image'
import React from 'react'
import { Box, Text } from '@/ui/atoms'
import { Card, CounterInput } from '@/ui/molecules'
import { CardProductProps } from './types'

const CardProduct = ({ image, title, value, onChange }: CardProductProps) => {
  return (
    <Card className='gap-4 flex-col'>
      <Text className='break-all block sm:hidden'>{title}</Text>
      <Box className='flex gap-4 justify-between'>
        <Box className='flex gap-4 items-center'>
          <Image alt={title} src={image} width={30} height={30} />
          <Text className='break-all hidden sm:block'>{title}</Text>
        </Box>
        <CounterInput value={value} onChange={onChange} min={1} />
      </Box>
    </Card>
  )
}

export default CardProduct
