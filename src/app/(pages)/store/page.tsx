'use client'
import React from 'react'
import { useGetItemsStore } from '@/application/hooks/store'
import { LayoutAuthenticationPage } from '@/ui/layouts'

const StorePage = () => {
  const LIMIT = 3
  const { data } = useGetItemsStore({ limit: LIMIT })

  console.log(data, 'DATA')

  return <LayoutAuthenticationPage>StorePage</LayoutAuthenticationPage>
}

export default StorePage
