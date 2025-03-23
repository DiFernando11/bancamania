import React from 'react'
import { z } from 'zod'
import { useI18Text } from '@/application/hooks'
import FormState from '@/ui/atoms/formState'
import CardSelected from '../cardSelected'
import { FormPurchaseI, FormPurchaseProps } from './types'
import ShowProducts from '../showProducts'

const FormPurchase = ({ formID, stepData }: FormPurchaseProps) => {
  const t = useI18Text('tarjetas')
  const handleSubmit = (datas: FormPurchaseI) => {
    console.log(datas, 'FORM_DATA')
  }

  const formPurchaseSchema = z.object({
    idCard: z.string().min(1, t('requiredCard')),
    products: z.array(
      z.object({
        idProduct: z.string(),
        quantity: z.number().min(1),
      })
    ),
  })

  const defaultValues = {
    idCard: '',
    products: stepData.selectedCards.map(item => ({
      idProduct: item.id,
      quantity: 1,
    })),
  }

  return (
    <FormState
      id={formID}
      onSubmit={handleSubmit}
      defaultValues={defaultValues}
      schema={formPurchaseSchema}
    >
      <CardSelected />
      <ShowProducts stepData={stepData} />
    </FormState>
  )
}

export default FormPurchase
