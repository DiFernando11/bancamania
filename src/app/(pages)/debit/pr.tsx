'use client'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import CardsDebit from './components/cardsDebit'

const TarjetasPage = () => {
  const t = useI18Text('tarjetas')

  return (
    <LayoutAuthenticationPage i18nTitle={t('title')}>
      <CardsDebit />
    </LayoutAuthenticationPage>
  )
}

export default TarjetasPage
