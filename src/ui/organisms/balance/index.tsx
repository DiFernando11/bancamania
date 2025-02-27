import classNames from 'classnames'
import React from 'react'
import { BitcoinSymbol } from '@/ui/molecules'
import { BalanceProps } from './types'
import SkeletonLoader from '../skeletonLoader'

const Balance = ({
  isShow,
  balance,
  isLoading,
  classIcon,
  textType,
  classSkeleton,
}: BalanceProps) => {
  return (
    <SkeletonLoader isLoading={isLoading} classNameSkeleton={classSkeleton}>
      <BitcoinSymbol
        classContainer={classNames({ 'blur-lg': !isShow })}
        textType={textType}
        classIcon={classIcon}
        text={balance}
      />
    </SkeletonLoader>
  )
}

export default Balance
