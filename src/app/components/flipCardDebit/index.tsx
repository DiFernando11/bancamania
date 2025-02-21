'use client'
import classNames from 'classnames'
import React from 'react'
import { useGetCardDebit } from '@/application/hooks'
import { normalizeName } from '@/shared/utils'
import { FlipCard } from '@/ui/molecules'
import { CardDebit, CardProduct } from '@/ui/organisms'
import { FlipCardDebitProps } from './types'

const FlipCardDebit = ({ next, isNextStep = true }: FlipCardDebitProps) => {
  const { data, isLoading } = useGetCardDebit()

  return (
    <FlipCard
      className='w-full heightCards'
      FrontContent={({ flip }) => (
        <CardDebit
          onClickFlip={flip}
          className={classNames('w-full self-center')}
          isLoading={isLoading}
          nextStepComponent={
            isNextStep && <CardProduct.NextProduct onClick={next} />
          }
          textAccount={data?.debitCard?.cardNumber}
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
          cv={data?.debitCard?.cvv}
          name={normalizeName({
            firstName: data?.firstName,
            lastName: data?.lastName,
          }).toLocaleUpperCase()}
          validThru={data?.debitCard?.expirationDate}
        />
      )}
    />
  )
}

export default FlipCardDebit
