'use client'
import classNames from 'classnames'
import { useState } from 'react'
import { useI18Text } from '@/application/hooks'
import { Box, Text } from '@/ui/atoms'
import CardProduct from '../../cardProduct'
import { CardAccountBackProps } from '../types'

const CardAccountBack = ({
  textAccount = '',
  className,
  onClick,
  isLoading,
  onClickFlip,
  name,
  nextStepComponent,
}: CardAccountBackProps) => {
  const [isShow, setIsShow] = useState(true)

  const t = useI18Text()

  return (
    <CardProduct
      onClick={onClick}
      className={classNames(
        className,
        'flex justify-between',
        'bg-account-back bg-primary-100 h-full p-4'
      )}
    >
      <Box className='flex flex-col justify-between'>
        <CardProduct.NameOwner name={name} isLoading={isLoading} />
        <Box>
          <CardProduct.TextAccount
            isLoading={isLoading}
            isShow={isShow}
            textAccount={textAccount}
          />
          <Text
            textType='font_16_fw_bold_fm_rob'
            className={classNames(
              'border w-28 text-center px-1 py-3 leading-4',
              'rounded-lg bg-primary-100 cursor-pointer'
            )}
          >
            {t('share').toUpperCase()}
          </Text>
        </Box>
      </Box>
      <Box className='flex flex-col justify-between'>
        {' '}
        <CardProduct.ShowBalance setIsShow={setIsShow} isShow={isShow} />
        {nextStepComponent && nextStepComponent}
        <CardProduct.BackFlip onClickFlip={onClickFlip} />
      </Box>
    </CardProduct>
  )
}
export default CardAccountBack
