'use client'
import classNames from 'classnames'
import React from 'react'
import { FlipCard } from '@/ui/molecules'
import { CardCredit, CardProduct } from '@/ui/organisms'
import { FlipCardCreditProps } from './types'

const FlipCardCredit = ({
  next,
  isNextStep = true,
  isLoading,
  data,
}: FlipCardCreditProps) => {
  return (
    <FlipCard
      className='w-full heightCards'
      FrontContent={({ flip }) => (
        <CardCredit
          onClickFlip={flip}
          className={classNames('w-full self-center')}
          isLoading={isLoading}
          nextStepComponent={
            isNextStep && <CardProduct.NextProduct onClick={next} />
          }
          textAccount={data?.cardNumber}
          brand={data.marca}
          version={data.version}
        />
      )}
      BackContent={({ flip }) => (
        <CardCredit.Back
          brand={data.marca}
          version={data.version}
          onClickFlip={flip}
          className='w-full self-center'
          isLoading={isLoading}
          nextStepComponent={
            isNextStep && <CardProduct.NextProduct onClick={next} />
          }
          cv={'1234'}
          name={'Diego Apolo'}
          validThru={'07/25'}
        />
      )}
    />
  )
}

export default FlipCardCredit
