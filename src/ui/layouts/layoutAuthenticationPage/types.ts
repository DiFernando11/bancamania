import { ReactElement } from 'react'

interface ContextualMenuItem {
  text: string
  redirect: string
}

export interface LayoutAuthenticationPageProps {
  children: React.ReactNode
  i18nTitle: string
  footerBox?: ReactElement
  contextualMenu?: ContextualMenuItem[]
}
