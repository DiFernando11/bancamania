import classNames from 'classnames'
import React from 'react'
import { Box } from '@/ui/atoms'
import Content from './content'
import { LayoutAuthenticationPageProps } from './types'

const LayoutAuthenticationPage = ({
  i18nTitle,
  footerBox,
  contextualMenu,
  children,
}: LayoutAuthenticationPageProps) => {
  return (
    <Box
      className={classNames('grid gap-6', 'h-full', {
        'grid-cols-1': !contextualMenu,
        'lg:grid-cols-[1fr_11.25rem]': contextualMenu,
      })}
    >
      <Content
        i18nTitle={i18nTitle}
        footerBox={footerBox}
        isContextualMenu={Boolean(contextualMenu)}
      >
        {children}
      </Content>
      {contextualMenu && (
        <div
          className={classNames(
            'hidden border items-center justify-center',
            'lg:flex',
            'h-20'
          )}
        >
          Menu contextual
        </div>
      )}
    </Box>
  )
}

export default LayoutAuthenticationPage
