'use client'
import classNames from 'classnames'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import { Box, Button, Text } from '@/ui/atoms'
import { SelectableCardProps } from './types'

const SelectedBox: React.FC<SelectableCardProps> = ({
  value,
  onChange,
  children,
  selectedValue,
}) => {
  const t = useI18Text()
  const isSelected = value === selectedValue

  const handleToggle = () => {
    onChange?.(isSelected ? '' : value)
  }

  return (
    <label className='cursor-pointer w-full'>
      <input
        type='radio'
        className='hidden'
        value={value}
        checked={isSelected}
        onChange={() => {}}
      />
      <Box
        role='button'
        tabIndex={0}
        aria-pressed={isSelected}
        className={classNames(
          'flex w-full items-center gap-4 rounded-xl border p-4 shadow-sm transition',
          {
            'border-gray-300 hover:border-primary-100': !isSelected,
            'border-primary-100 shadow-md': isSelected,
          }
        )}
        onClick={handleToggle}
        onKeyDown={e => e.key === 'Enter' && handleToggle()}
      >
        {children}
        <Button
          variant='secondary'
          className={classNames('border !w-36 !p-2 rounded-lg', {
            'border-gray-300': !isSelected,
            'border-primary-100 bg-primary-100 text-white': isSelected,
          })}
        >
          <Text textType='font_14_16_fw_bold_fm_rob'>
            {isSelected ? t('selected') : t('select')}
          </Text>
        </Button>
      </Box>
    </label>
  )
}

export default SelectedBox
