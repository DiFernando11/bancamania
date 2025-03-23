'use client'
import React, { useEffect } from 'react'
import { useFormContext, useFieldArray } from 'react-hook-form'
import { useI18Text } from '@/application/hooks'
import { Box, Text } from '@/ui/atoms'
import { BitcoinSymbol } from '@/ui/molecules'
import CardProduct from './cardProduct'
import { ShowProductsProps } from './types'
import { FORM_PURCHASE_NAME, FormPurchaseI } from '../formPurchase/types'

const ShowProducts = ({ stepData }: ShowProductsProps) => {
  const t = useI18Text('store')
  const { control, watch, setValue } = useFormContext<FormPurchaseI>()
  const products = watch(FORM_PURCHASE_NAME.products)
  const total = watch(FORM_PURCHASE_NAME.totalBuy)
  const isBitcoin = false

  const { fields, update } = useFieldArray({
    control,
    name: FORM_PURCHASE_NAME.products,
  })

  useEffect(() => {
    const newTotal = products.reduce((acc, product) => {
      const matched = stepData.selectedCards.find(
        p => p.id === product.idProduct
      )
      const priceCurrent = isBitcoin ? matched?.price : matched?.miles

      const price = matched ? parseFloat(priceCurrent as string) : 0

      return acc + product.quantity * (isNaN(price) ? 0 : price)
    }, 0)

    setValue(FORM_PURCHASE_NAME.totalBuy, newTotal)
  }, [products, setValue, stepData.selectedCards])

  return (
    <Box className='flex flex-col gap-4'>
      {isBitcoin ? (
        <BitcoinSymbol
          classIcon='w-5 h-5'
          balance={t('total', { total: total.toFixed(2) })}
          textType='font_20_fw_bold_fm_rob'
        />
      ) : (
        <Text textType='font_20_fw_bold_fm_rob'>
          {t('total', { total: t('milesBalance', { miles: total }) })}
        </Text>
      )}
      {fields.map((field, index) => {
        const product = stepData.selectedCards.find(
          p => p.id === field.idProduct
        )
        if (!product) return null

        return (
          <CardProduct
            key={field.id}
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
