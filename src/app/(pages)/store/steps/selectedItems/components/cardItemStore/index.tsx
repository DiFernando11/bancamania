'use client'
import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import { Box, Text } from '@/ui/atoms'
import { BitcoinSymbol, CheckBox } from '@/ui/molecules'
import GaleryCards from '@/ui/organisms/galeryCards'
import { CardItemStoreProps } from './types'

const CardItemStore: React.FC<CardItemStoreProps> = ({
  image,
  title,
  description,
  miles,
  price,
  id,
  onChange,
  selectedValues,
}) => {
  const t = useI18Text('store')
  const isSelected = selectedValues.some(select => select.id === id)

  const handleSelection = () => {
    onChange(
      isSelected
        ? selectedValues.filter(val => val.id !== id)
        : [...selectedValues, { description, id, image, miles, price, title }]
    )
  }

  return (
    <Box
      className={classNames(
        'flex flex-col justify-between gap-4 cursor-pointer relative'
      )}
      onClick={handleSelection}
    >
      <CheckBox
        value={id}
        checked={isSelected}
        onChange={handleSelection}
        className='!absolute right-0 top-0'
        onClick={e => e.stopPropagation()}
      />
      <Box className='flex flex-col justify-center gap-4'>
        <Image
          src={image}
          alt={title}
          width={60}
          height={60}
          className='self-center'
        />
        <Text
          textType='font_18_fw_bold_fm_rob_text-200'
          className='text-center text-lg font-bold'
        >
          {title}
        </Text>
        <Text className='text-center'>{description}</Text>
      </Box>
      <Box className='flex justify-between'>
        <Text textType='font_18_fw_bold_fm_rob'>{t('miles', { miles })}</Text>
        <BitcoinSymbol
          textType='font_18_fw_bold_fm_rob'
          classIcon={'w-5 h-5'}
          balance={t('price', { price })}
        />
      </Box>
    </Box>
  )
}

export default CardItemStore
