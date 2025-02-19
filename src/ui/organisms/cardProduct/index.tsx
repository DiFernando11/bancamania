'use client'
import classNames from 'classnames'
import React from 'react'
import { Box } from '@/ui/atoms'
import { Card } from '@/ui/molecules'
import BackBankingCard from './backBankingCard'
import BackFlip from './backFlip'
import Balance from './balance'
import BankingCard from './bankingCard'
import CvText from './cvText'
import HeaderLogo from './headerLogo'
import HeaderMasterCard from './headerMasterCard'
import NameOwner from './nameOwner'
import NextProduct from './nextProduct'
import ShowBalance from './showBalance'
import TextAccount from './textAccount'
import { CardProductProps } from './types'
import ValidThru from './validThru'
import WavesCard from './wavesCard'

const CardProduct = ({
  className,
  onClick,
  children,
  height,
  maxHeight,
  minHeight,
}: CardProductProps) => {
  return (
    <Card
      style={{ height, maxHeight, minHeight }}
      onClick={onClick}
      className={classNames('shadow-all-accent border', className)}
    >
      {children}
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
CardProduct.HeaderMasterCard = HeaderMasterCard
CardProduct.HeaderLogo = HeaderLogo
CardProduct.WavesCard = WavesCard
CardProduct.BankingCard = BankingCard
CardProduct.BackBankingCard = BackBankingCard
CardProduct.ValidThru = ValidThru
CardProduct.CvText = CvText

export default CardProduct
