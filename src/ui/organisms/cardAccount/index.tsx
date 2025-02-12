'use client'
import classNames from 'classnames'
import React, { useState } from 'react'
import { useI18Text } from '@/application/hooks'
import { maskReplace } from '@/shared/utils/strings'
import { Box, Icon, Text } from '@/ui/atoms'
import { BitcoinSymbol } from '@/ui/molecules'
import { CardAccountProps } from './types'

const CardAccount = ({
  textAccount,
  balance,
  className,
  onClick,
}: CardAccountProps) => {
  const [isShow, setIsShow] = useState(true)

  const t = useI18Text('onBoarding')

  return (
    <Box
      onClick={onClick}
      className={classNames(
        className,
        'bg-account bg-primary-100 w-full shadow-all-accent rounded-lg flex flex-col'
      )}
    >
      <Box className='pl-2 pr-4 pt-4 flex justify-between flex-grow'>
        <Icon name='Account' className='w-20 h-20' />
        <Box className='cursor-pointer' onClick={() => setIsShow(!isShow)}>
          <Icon name={isShow ? 'EyeOpen' : 'EyeClose'} className='w-8 h-8' />
        </Box>
      </Box>
      <Box className='px-4 pb-4 pt-4'>
        <BitcoinSymbol
          classContainer={classNames({ 'blur-lg': !isShow })}
          textType='font_30_fw_bold_fm_rob'
          classIcon='w-6 h-6'
          text={balance}
        />
        <Box className='flex items-center justify-between gap-3'>
          <Text textType='font_16_fw_bold_fm_rob'>
            {t('savings', {
              balance: isShow
                ? textAccount
                : maskReplace({ text: textAccount }),
            })}
          </Text>
          <Text textType='font_16_fw_bold_fm_rob' className='break-all'>
            BANCAMANIA
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default CardAccount
