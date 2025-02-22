import { ReactElement } from 'react'

interface ContextualMenuItem {
  text: string
  redirect: string
}

export interface LayoutAuthenticationPageProps {
  children: React.ReactNode
  i18nTitle?: string
  footerBox?: ReactElement
  contextualMenu?: ContextualMenuItem[]
}

export interface LayoutPageAuthFooter {
  footerBox?: ReactElement
}

export interface LayoutPageAuthHeader {
  isContextualMenu: boolean
  i18nTitle: string
}

export interface LayoutPageAuthContent
  extends Omit<LayoutAuthenticationPageProps, 'contextualMenu'> {
  isContextualMenu: boolean
}
