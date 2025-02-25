import React from 'react'
import { BalanceProps } from './types'
import Balance from '../../balance'

const BalanceProduct = ({ isShow, balance, isLoading }: BalanceProps) => {
  return (
    <Balance
      isLoading={isLoading}
      textType='font_36_fw_bold_fm_rob'
      classIcon='w-8 h-8'
      balance={balance}
      isShow={isShow}
      height='h-6'
      width='w-12'
    />
  )
}

export default BalanceProduct
