import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { ReactElement } from 'react'
import { MenuOption } from '@/shared'

export interface LayoutAuthenticationPageProps {
  i18nTitle?: string
  footerBox?: React.ReactElement
  contextualMenu?: (params: {
    route: AppRouterInstance
    t: (key: string) => string
  }) => MenuOption[]
  children: React.ReactNode
}

export interface LayoutPageAuthFooter {
  footerBox?: ReactElement
}
export interface LayoutPageAuthContent
  extends Omit<LayoutAuthenticationPageProps, 'contextualMenu'> {
  contextualMenu?: MenuOption[]
}
