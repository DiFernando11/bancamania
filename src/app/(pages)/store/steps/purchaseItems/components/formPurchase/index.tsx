import React from 'react'
import { useGetCardDebit } from '@/application/hooks'
import FormState from '@/ui/atoms/formState'
import CardSelected from '../cardSelected'
import { FormPurchaseI } from './types'

const FormPurchase = ({ formID }: { formID: string }) => {
  const { data, isLoading } = useGetCardDebit()
  const handleSubmit = (datas: FormPurchaseI) => {
    console.log(datas, 'FORM_DATA')
  }

  if (isLoading) return null

  return (
    <FormState
      id={formID}
      onSubmit={handleSubmit}
      defaultValues={{ idCard: data?.id }}
    >
      <CardSelected />
    </FormState>
  )
}

export default FormPurchase
