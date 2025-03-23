import React from 'react'
import { z } from 'zod'
import { useGetCardDebit, useI18Text } from '@/application/hooks'
import { TYPE_CARD, TypeCardCredit } from '@/shared'
import FormState from '@/ui/atoms/formState'
import CardSelected from '../cardSelected'
import { FormPurchaseI, FormPurchaseProps, METHOD_PAY } from './types'
import ShowProducts from '../showProducts'

const FormPurchase = ({ formID, stepData }: FormPurchaseProps) => {
  const t = useI18Text('tarjetas')
  const { data, isLoading, isError } = useGetCardDebit()
  const handleSubmit = (datas: FormPurchaseI) => {
    console.log(datas, 'FORM_DATA')
  }

  const formPurchaseSchema = z.object({
    deferredMonth: z.string(),
    products: z.array(
      z.object({
        idProduct: z.string(),
        quantity: z.number().min(1),
      })
    ),
    selectedCard: z.object({
      cardNumber: z.string(),
      id: z.string(),
      marca: z.nativeEnum(TypeCardCredit).optional(),
      typeCard: z.nativeEnum(TYPE_CARD),
      version: z.string().optional(),
    }),
    totalBuy: z.number(),
    typeBuy: z.nativeEnum(METHOD_PAY),
  })

  const defaultValues = {
    deferredMonth: '0',
    products: stepData.selectedCards.map(item => ({
      idProduct: item.id,
      quantity: 1,
    })),
    selectedCard: {
      cardNumber: data?.cardNumber,
      id: data?.id,
      typeCard: TYPE_CARD.DEBIT,
    },
    totalBuy: stepData.selectedCards.reduce((acc, item) => {
      const price = parseFloat(item.price)

      return acc + (isNaN(price) ? 0 : price)
    }, 0),
    typeBuy: METHOD_PAY.BITCOIN,
  }

  return (
    <FormState
      id={formID}
      onSubmit={handleSubmit}
      defaultValues={defaultValues}
      schema={formPurchaseSchema}
    >
      <CardSelected cardDebit={data} isLoading={isLoading} isError={isError} />
      <ShowProducts stepData={stepData} />
    </FormState>
  )
}

export default FormPurchase
