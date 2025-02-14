'use client'
import classNames from 'classnames'
import React from 'react'
import { Card } from '@/ui/molecules'
import FooterCard from './footerCard'
import HeaderCard from './headerCard'
import ShowBalance from './showBalance'
import { CardProductProps } from './types'

const CardProduct = ({ className, onClick, children }: CardProductProps) => {
  return (
    <Card onClick={onClick} className={classNames(className)}>
      {children}
    </Card>
  )
}

CardProduct.ShowBalance = ShowBalance
CardProduct.HeaderCard = HeaderCard
CardProduct.FooterCard = FooterCard

export default CardProduct
