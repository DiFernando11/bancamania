'use client'

import React from 'react'
import { useFormContext, useFieldArray } from 'react-hook-form'
import { Box } from '@/ui/atoms'
import CardProduct from './cardProduct'
import { ShowProductsProps } from './types'
import { FormPurchaseI } from '../formPurchase/types'

const ShowProducts = ({ stepData }: ShowProductsProps) => {
  const { control } = useFormContext<FormPurchaseI>()

  const { fields, update } = useFieldArray({
    control,
    name: 'products',
  })

  return (
    <Box className='flex flex-col gap-4'>
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
