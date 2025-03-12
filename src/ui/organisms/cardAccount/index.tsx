'use client'
import classNames from 'classnames'
import { useState } from 'react'
import { useI18Text } from '@/application/hooks'
import { Box, Icon, Text } from '@/ui/atoms'
import CardProduct from '../cardProduct'
import CardAccountBack from './cardAccountBack'
import { CardAccountProps } from './types'

const CardAccount = ({
  balance = '',
  className,
  onClick,
  isLoading,
  onClickFlip,
  nextStepComponent,
}: CardAccountProps) => {
  const [isShow, setIsShow] = useState(true)

  const t = useI18Text('onBoarding')

  return (
    <CardProduct
      onClick={onClick}
      className={classNames(
        className,
        'flex justify-between',
        'bg-account bg-primary-100 h-full p-4'
      )}
    >
      <Box className='flex flex-col justify-between'>
        <Box>
          <Icon name='Wallet' className='w-14 h-14' />
          <Text textType='font_16_fw_bold_fm_rob' className='break-all'>
            {t('savings')}
          </Text>
        </Box>
        <CardProduct.Balance
          balance={balance}
          isLoading={isLoading}
          isShow={isShow}
        />
      </Box>
      <Box className='flex flex-col justify-between'>
        <CardProduct.ShowBalance setIsShow={setIsShow} isShow={isShow} />
        {nextStepComponent && nextStepComponent}
        {onClickFlip && <CardProduct.BackFlip onClickFlip={onClickFlip} />}
      </Box>
    </CardProduct>
  )
}

CardAccount.Back = CardAccountBack
export default CardAccount
