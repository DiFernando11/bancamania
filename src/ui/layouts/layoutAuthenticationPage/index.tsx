import classNames from 'classnames'
import React from 'react'
import { Box } from '@/ui/atoms'
import Content from './content'
import DestokpMenuContextual from './menuContextual/destokp'
import { LayoutAuthenticationPageProps } from './types'

const LayoutAuthenticationPage = ({
  i18nTitle,
  footerBox,
  contextualMenu = [],
  children,
}: LayoutAuthenticationPageProps) => {
  return (
    <Box
      className={classNames('grid gap-2', 'h-full', {
        'grid-cols-1': !contextualMenu,
        'lg:grid-cols-[1fr_14rem]': contextualMenu,
      })}
    >
      <Content
        i18nTitle={i18nTitle}
        footerBox={footerBox}
        contextualMenu={contextualMenu}
      >
        {children}
      </Content>
      {contextualMenu?.length > 0 && (
        <DestokpMenuContextual options={contextualMenu} />
      )}
    </Box>
  )
}

export default LayoutAuthenticationPage
