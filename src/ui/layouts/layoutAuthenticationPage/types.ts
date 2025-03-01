import { ReactElement } from 'react'
import { MenuOption } from '@/shared'

export interface LayoutAuthenticationPageProps {
  children: React.ReactNode
  i18nTitle?: string
  footerBox?: ReactElement
  contextualMenu?: MenuOption[]
}

export interface LayoutPageAuthFooter {
  footerBox?: ReactElement
}
export interface LayoutPageAuthContent
  extends Omit<LayoutAuthenticationPageProps, 'contextualMenu'> {
  contextualMenu?: MenuOption[]
}
