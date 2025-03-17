'use client'
import React from 'react'
import { useGetCardCreditID } from '@/application/hooks'
import { DetailCreditProps } from './types'

const DetailCredit = ({ stepData }: DetailCreditProps) => {
  const { data } = useGetCardCreditID({ creditID: stepData.id })
  console.log(data, 'DATA')

  return <div>DataCredit</div>
}

export default DetailCredit
