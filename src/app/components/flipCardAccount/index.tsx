'use client'
import React from 'react'
import { useGetAccount } from '@/application/hooks'
import { FlipCard } from '@/ui/molecules'
import { CardAccount, CardProduct } from '@/ui/organisms'
import { FlipCardAccountProps } from './types'

const FlipCardAccount = ({ next, isNextStep = true }: FlipCardAccountProps) => {
  const { data, isLoading } = useGetAccount()

  return (
    <FlipCard
      className='w-full heightCards'
      FrontContent={({ flip }) => (
        <CardAccount
          onClickFlip={flip}
          balance={data?.balance}
          className='w-full self-center'
          isLoading={isLoading}
          nextStepComponent={
            isNextStep && <CardProduct.NextProduct onClick={next} />
          }
        />
      )}
      BackContent={({ flip }) => (
        <CardAccount.Back
          onClickFlip={flip}
          className='w-full self-center'
          textAccount={data?.accountNumber}
          isLoading={isLoading}
          name={data?.owner?.toLocaleUpperCase()}
          nextStepComponent={
            isNextStep && <CardProduct.NextProduct onClick={next} />
          }
        />
      )}
    />
  )
}

export default FlipCardAccount
