'use client'
import classNames from 'classnames'
import React from 'react'
import { useGetAccount } from '@/application/hooks'
import { normalizeName } from '@/shared/utils'
import { FlipCard } from '@/ui/molecules'
import { CardAccount, CardDebit, CardProduct } from '@/ui/organisms'
import { FlipCardDebitProps } from './types'
import './index.css'

const FlipCardDebit = ({ next, isNextStep = true }: FlipCardDebitProps) => {
  const { data, isLoading } = useGetAccount()

  return (
    <FlipCard
      className='w-full heightCards'
      FrontContent={({ flip }) => (
        <CardDebit
          onClickFlip={flip}
          balance={data?.account?.balance}
          className={classNames('w-full self-center')}
          isLoading={isLoading}
          nextStepComponent={
            isNextStep && <CardProduct.NextProduct onClick={next} />
          }
        />
      )}
      BackContent={({ flip }) => (
        <CardDebit.Back
          onClickFlip={flip}
          className='w-full self-center'
          isLoading={isLoading}
          nextStepComponent={
            isNextStep && <CardProduct.NextProduct onClick={next} />
          }
          cv='1234'
          name='Diego Apolo'
          validThru='07/28'
        />
      )}
    />
  )
}

export default FlipCardDebit
