'use client'
import classNames from 'classnames'
import { useRouter } from 'next/navigation'
import React, { useMemo } from 'react'
import { useI18Text } from '@/application/hooks'
import { Box } from '@/ui/atoms'
import Content from './content'
import DestokpMenuContextual from './menuContextual/destokp'
import { LayoutAuthenticationPageProps } from './types'

const LayoutAuthenticationPage = ({
  i18nTitle,
  footerBox,
  contextualMenu,
  children,
}: LayoutAuthenticationPageProps) => {
  const router = useRouter()
  const t = useI18Text('contextMenu')

  const computedContextualMenu = useMemo(() => {
    return contextualMenu ? contextualMenu({ route: router, t }) : []
  }, [router, contextualMenu, t])

  const isContextualMenu = computedContextualMenu?.length > 0

  return (
    <Box
      className={classNames('grid gap-2', 'h-full', {
        'grid-cols-1': !isContextualMenu,
        'lg:grid-cols-[1fr_14rem]': isContextualMenu,
      })}
    >
      <Content
        i18nTitle={i18nTitle}
        footerBox={footerBox}
        contextualMenu={computedContextualMenu}
      >
        {children}
      </Content>
      {isContextualMenu && (
        <DestokpMenuContextual options={computedContextualMenu} />
      )}
    </Box>
  )
}

export default LayoutAuthenticationPage
