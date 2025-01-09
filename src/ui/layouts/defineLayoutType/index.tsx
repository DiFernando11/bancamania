'use client'
import React from 'react'
import { useCurrentPath } from '@/shared/hooks'
import { DefineLayoutTypeProps, LayoutMap } from './types'
import LayoutAuthentication from '../layoutAuthentication'
import LayoutPublic from '../layoutPublic'

const DefineLayoutType = ({ children }: DefineLayoutTypeProps) => {
  const pathname = useCurrentPath()

  const typesLayouts: LayoutMap = {
    private: LayoutAuthentication,
    public: LayoutPublic,
  }

  const SelectedLayout = typesLayouts[pathname?.layout as keyof LayoutMap]

  if (!SelectedLayout) return <>{children}</>

  return <SelectedLayout>{children}</SelectedLayout>
}

export default DefineLayoutType
