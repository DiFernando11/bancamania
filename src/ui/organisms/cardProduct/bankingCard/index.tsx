import classNames from 'classnames'
import React from 'react'
import { Box } from '@/ui/atoms'
import CardProduct from '..'
import { BankingCardProps } from './types'

const BankingCard = ({
  className,
  onClick,
  isLoading,
  nextStepComponent,
  headerBankCard,
  footerRightComponent,
  textAccount,
  titleComponent = <CardProduct.HeaderLogo />,
}: BankingCardProps) => {
  return (
    <CardProduct
      onClick={onClick}
      className={classNames(className, 'flex justify-between h-full p-4')}
    >
      <Box className='flex flex-col justify-between'>
        {titleComponent}
        <CardProduct.WavesCard />
        <CardProduct.TextAccount
          isLoading={isLoading}
          isShow
          textType='font_20_fw_bold_fm_rob'
          textAccount={textAccount}
        />
      </Box>
      <Box className='flex flex-col justify-between'>
        {headerBankCard}
        {nextStepComponent && nextStepComponent}
        {footerRightComponent && footerRightComponent}
      </Box>
    </CardProduct>
  )
}

export default BankingCard
