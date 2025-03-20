import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
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
  const isSelected = selectedValues.some(select => select.id === id)

  const handleSelection = () => {
    onChange(
      isSelected
        ? selectedValues.filter(val => val.id !== id)
        : [...selectedValues, { description, id, image, miles, price, title }]
    )
  }

  return (
    <GaleryCards.Card
      className={classNames(
        'flex-col justify-between gap-4 cursor-pointer p-4 relative',
        {
          'border-gray-400 border-2': !isSelected,
          'border-primary-100 border-2': isSelected,
        }
      )}
      onClick={handleSelection}
    >
      <CheckBox
        value={id}
        checked={isSelected}
        onChange={handleSelection}
        className='!absolute right-4 top-4'
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
        <Text textType='font_18_fw_bold_fm_rob'>{`Miles: ${miles}`}</Text>
        <BitcoinSymbol
          textType='font_18_fw_bold_fm_rob'
          classIcon={'w-5 h-5'}
          balance={price}
        />
      </Box>
    </GaleryCards.Card>
  )
}

export default CardItemStore
