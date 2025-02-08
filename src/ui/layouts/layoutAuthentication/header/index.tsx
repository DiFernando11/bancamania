'use client'
import classNames from 'classnames'
import React from 'react'
import { useI18Text } from '@/application/hooks/commons'
import { Box, Icon, Text } from '@/ui/atoms'
import OptionsRight from './optionsRight'

const Header = () => {
  const t = useI18Text('commonAriaLabel')
  const tCommon = useI18Text()

  return (
    <header
      aria-label={t('header')}
      className={classNames(
        'px-4 flex items-center shadow-bottom-accent bg-bg-translucent-100 rounded-b-3xl',
        'row-start-1 row-end-2 col-span-1',
        'sm:col-span-2'
      )}
    >
      <div className='flex gap-2 justify-center items-center'>
        <Box className='hidden sm:block'>
          <Icon name='Logo' />
        </Box>
        <Text
          variant='h4'
          textType='font_20-30_fw_bold_fm_rob_text-200'
          className='uppercase'
        >
          {tCommon('titlePage')}
        </Text>
      </div>
      <OptionsRight />
    </header>
  )
}

export default Header
