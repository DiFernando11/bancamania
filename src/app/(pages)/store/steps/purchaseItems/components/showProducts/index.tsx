'use client'
import React, { useEffect } from 'react'
import { useFormContext, useFieldArray } from 'react-hook-form'
import { useI18Text } from '@/application/hooks'
import { TYPE_CARD } from '@/shared'
import { Box, Text } from '@/ui/atoms'
import { AnimationVisible, ButtonGroup, FormField } from '@/ui/molecules'
import { ButtonGroupProps } from '@/ui/molecules/buttonGroup/types'
import CardProduct from './cardProduct'
import { ShowProductsProps } from './types'
import {
  FORM_PURCHASE_NAME,
  FormPurchaseI,
  METHOD_PAY,
} from '../formPurchase/types'
import TotalDeferred from '../totalDeferred'

const ShowProducts = ({ stepData }: ShowProductsProps) => {
  const t = useI18Text('store')
  const { control, watch, setValue } = useFormContext<FormPurchaseI>()
  const products = watch(FORM_PURCHASE_NAME.products)
  const total = watch(FORM_PURCHASE_NAME.totalBuy)
  const methodPay = watch(FORM_PURCHASE_NAME.typeBuy)
  const selectedCard = watch(FORM_PURCHASE_NAME.selectedCard)
  const isBitcoinMethod = methodPay === METHOD_PAY.BITCOIN
  const isCredit = TYPE_CARD.CREDIT === selectedCard?.typeCard

  const { fields, update } = useFieldArray({
    control,
    name: FORM_PURCHASE_NAME.products,
  })

  useEffect(() => {
    const newTotal = products.reduce((acc, product) => {
      const matched = stepData.selectedCards.find(
        p => p.id === product.idProduct
      )
      const priceCurrent = isBitcoinMethod ? matched?.price : matched?.miles

      const price = matched ? parseFloat(priceCurrent as string) : 0

      return acc + product.quantity * (isNaN(price) ? 0 : price)
    }, 0)

    setValue(FORM_PURCHASE_NAME.totalBuy, newTotal)
  }, [products, setValue, stepData.selectedCards, methodPay])

  const options = [
    { id: METHOD_PAY.BITCOIN, label: t('bitcoin') },
    { id: METHOD_PAY.MILES, label: t('milesLabel') },
  ]

  return (
    <Box className='flex flex-col gap-4'>
      <AnimationVisible isVisible={isCredit}>
        <FormField<FormPurchaseI, ButtonGroupProps>
          name={FORM_PURCHASE_NAME.typeBuy}
          isRequired
          component={ButtonGroup}
          options={options}
        />
      </AnimationVisible>
      <TotalDeferred isVisible={isBitcoinMethod} isCredit={isCredit} />
      <AnimationVisible isVisible={!isBitcoinMethod && isCredit}>
        <Text textType='font_20_fw_bold_fm_rob'>
          {t('total', { total: t('milesBalance', { miles: total }) })}
        </Text>
      </AnimationVisible>
      {fields.map((field, index) => {
        const product = stepData.selectedCards.find(
          p => p.id === field.idProduct
        )
        if (!product) return null

        return (
          <CardProduct
            key={field.id}
            price={isBitcoinMethod ? product.price : product.miles}
            title={product.title}
            image={product.image}
            value={field.quantity}
            onChange={value => {
              update(index, { ...field, quantity: value })
            }}
          />
        )
      })}
    </Box>
  )
}

export default ShowProducts
