'use client'
import classNames from 'classnames'
import React from 'react'
import { Box } from '@/ui/atoms'
import { Card } from '@/ui/molecules'
import BackFlip from './backFlip'
import Balance from './balance'
import NameOwner from './nameOwner'
import NextProduct from './nextProduct'
import ShowBalance from './showBalance'
import TextAccount from './textAccount'
import { CardProductProps } from './types'

// Definir manualmente el tipo del componente para permitir propiedades extra
const CardProduct = ({
  className,
  onClick,
  LeftContent,
  RightContent,
  height,
  maxHeight,
  minHeight,
}: CardProductProps) => {
  return (
    <Card
      style={{ height, maxHeight, minHeight }}
      onClick={onClick}
      className={classNames(className, 'p-4 shadow-all-accent border')}
    >
      <Box className='flex flex-col justify-between'>{LeftContent}</Box>
      <Box className='flex flex-col justify-between'>{RightContent}</Box>
    </Card>
  )
}

// Agregar propiedades manualmente al componente
CardProduct.ShowBalance = ShowBalance
CardProduct.TextAccount = TextAccount
CardProduct.NextProduct = NextProduct
CardProduct.BackFlip = BackFlip
CardProduct.NameOwner = NameOwner
CardProduct.Balance = Balance

export default CardProduct
