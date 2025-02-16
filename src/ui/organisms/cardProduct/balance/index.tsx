import classNames from 'classnames'
import React from 'react'
import { BitcoinSymbol } from '@/ui/molecules'
import { BalanceProps } from './types'
import SkeletonLoader from '../../skeletonLoader'

const Balance = ({ isShow, balance, isLoading }: BalanceProps) => {
  return (
    <SkeletonLoader isLoading={isLoading} height='h-6' width='w-12'>
      <BitcoinSymbol
        classContainer={classNames({ 'blur-lg': !isShow })}
        textType='font_30_fw_bold_fm_rob'
        classIcon='w-6 h-6'
        text={balance}
      />
    </SkeletonLoader>
  )
}

export default Balance
