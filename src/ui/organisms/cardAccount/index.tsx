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
  height = '200px',
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
        'bg-account bg-primary-100'
      )}
      height={height}
      RightContent={
        <>
          <CardProduct.ShowBalance setIsShow={setIsShow} isShow={isShow} />
          {nextStepComponent && nextStepComponent}
          <CardProduct.BackFlip onClickFlip={onClickFlip} />
        </>
      }
      LeftContent={
        <>
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
        </>
      }
    />
  )
}

CardAccount.Back = CardAccountBack
export default CardAccount
