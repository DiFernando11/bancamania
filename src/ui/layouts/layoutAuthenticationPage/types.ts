import { ReactElement } from 'react'
import { MenuOption } from '@/shared'

export interface LayoutAuthenticationPageProps {
  i18nTitle?: string
  footerBox?: React.ReactElement
  contextualMenu?: (params: {
    route: { push: (path: string) => void }
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
