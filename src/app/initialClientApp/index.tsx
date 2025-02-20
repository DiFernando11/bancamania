'use client'
import React, { ReactNode, useEffect } from 'react'
import { useGlobalStore } from '@/application/zustand'
import { ReactPortal } from '@/ui/atoms'
import { DefineLayoutType } from '@/ui/layouts'
import GlobalLoading from '../components/globalLoading'

const InitialClientApp = ({
  locale,
  children,
}: {
  locale: string
  children: ReactNode
}) => {
  const { setLocale } = useGlobalStore()
  useEffect(() => {
    if (locale) {
      setLocale(locale)
    }
  }, [locale])

  return (
    <>
      <GlobalLoading />
      <ReactPortal />
      <DefineLayoutType>{children}</DefineLayoutType>
    </>
  )
}

export default InitialClientApp
