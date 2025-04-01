'use client'
import React from 'react'
import { z } from 'zod'
import { useGetCardDebit, useRemoveQueries } from '@/application/hooks'
import { usePurchaseItemsStore } from '@/application/hooks/store'
import { clientRoutes } from '@/routes/clientRoutes'
import { TYPE_CARD, TypeCardCredit } from '@/shared'
import { useGlobalLoading, useNavigation } from '@/shared/hooks'
import { replaceDynamicsRoutes } from '@/shared/utils'
import {
  DOWNLOAD_STATEMENT_CREDIT,
  GET_ACCOUNT,
  GET_CARD_CREDIT,
  GET_CREDIT_BY_ID,
  GET_INSTALLMENT,
  GET_MOVEMENTS,
  GET_PREVIEW_RECEIPT,
} from '@/shared/utils/constantsQuery'
import FormState from '@/ui/atoms/formState'
import { AlertErrorService } from '@/ui/organisms'
import CardSelected from '../cardSelected'
import { FormPurchaseI, FormPurchaseProps, METHOD_PAY } from './types'
import ShowProducts from '../showProducts'

const FormPurchase = ({ formID, stepData }: FormPurchaseProps) => {
  const router = useNavigation()
  const { data, isLoading, isError } = useGetCardDebit()
  const { invalidate } = useRemoveQueries()
  const {
    handleActionService,
    isLoading: isLoadingPurchase,
    isError: isErrorPurchase,
    error,
  } = usePurchaseItemsStore()

  useGlobalLoading([isLoadingPurchase])
  const handleSubmit = (dataForm: FormPurchaseI) => {
    handleActionService(
      {
        deferredMonth: Number(dataForm.deferredMonth),
        idCard: dataForm.selectedCard?.id as string,
        methodPay: dataForm.methodPay,
        products: dataForm.products.map(item => ({
          id: item.idProduct,
          quantity: item.quantity,
        })),
        typeCard: dataForm.selectedCard?.typeCard as TYPE_CARD,
      },
      {
        onSuccess: ({ receiptID }) => {
          invalidate({ queryKey: [GET_PREVIEW_RECEIPT] })
          if (dataForm.selectedCard?.typeCard === TYPE_CARD.CREDIT) {
            invalidate({
              queryKey: [GET_CREDIT_BY_ID, dataForm?.selectedCard?.id],
            })
            invalidate({
              queryKey: [GET_CARD_CREDIT],
            })
            invalidate({
              queryKey: [GET_INSTALLMENT, dataForm?.selectedCard?.id],
            })
            invalidate({
              queryKey: [DOWNLOAD_STATEMENT_CREDIT, dataForm?.selectedCard?.id],
            })
          } else {
            invalidate({ queryKey: [GET_ACCOUNT] })
          }
          invalidate({ queryKey: [GET_MOVEMENTS] })
          router.push(
            replaceDynamicsRoutes(clientRoutes.receiptsID.path, {
              id: receiptID,
            })
          )
        },
      }
    )
  }

  const formPurchaseSchema = z.object({
    deferredMonth: z.number(),
    methodPay: z.nativeEnum(METHOD_PAY),
    products: z.array(
      z.object({
        idProduct: z.string(),
        quantity: z.number().min(1),
      })
    ),
    selectedCard: z.object({
      brand: z.nativeEnum(TypeCardCredit).optional(),
      cardNumber: z.string(),
      id: z.string(),
      typeCard: z.nativeEnum(TYPE_CARD),
      version: z.string().optional(),
    }),
    totalBuy: z.number(),
  })

  const defaultValues = {
    deferredMonth: 1,
    methodPay: METHOD_PAY.BITCOIN,
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
  }

  return (
    <FormState
      id={formID}
      onSubmit={handleSubmit}
      defaultValues={defaultValues}
      schema={formPurchaseSchema}
    >
      <CardSelected cardDebit={data} isLoading={isLoading} isError={isError} />
      <AlertErrorService isScroll isError={isErrorPurchase} error={error} />
      <ShowProducts stepData={stepData} />
    </FormState>
  )
}

export default FormPurchase
