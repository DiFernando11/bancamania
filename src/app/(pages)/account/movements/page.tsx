'use client'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import Movement from './components/movement'

const AccountMovementsPage = () => {
  const t = useI18Text('movements')

  return (
    <LayoutAuthenticationPage i18nTitle={t('titleAccount')}>
      <Movement />
    </LayoutAuthenticationPage>
  )
}

export default AccountMovementsPage
