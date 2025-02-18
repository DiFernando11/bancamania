'use client'
import React from 'react'
import { useGetAccount } from '@/application/hooks'
import { normalizeName } from '@/shared/utils'
import { FlipCard } from '@/ui/molecules'
import { CardAccount, CardProduct } from '@/ui/organisms'
import './index.css'
import { FlipCardAccountProps } from './types'

const FlipCardAccount = ({ next, isNextStep = true }: FlipCardAccountProps) => {
  const { data, isLoading } = useGetAccount()

  return (
    <FlipCard
      className='w-full h-[200px]'
      FrontContent={({ flip }) => (
        <CardAccount
          onClickFlip={flip}
          balance={data?.account?.balance}
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
          textAccount={data?.account?.accountNumber}
          isLoading={isLoading}
          name={normalizeName({
            firstName: data?.firstName,
            lastName: data?.lastName,
          }).toLocaleUpperCase()}
          nextStepComponent={
            isNextStep && <CardProduct.NextProduct onClick={next} />
          }
        />
      )}
    />
  )
}

export default FlipCardAccount
