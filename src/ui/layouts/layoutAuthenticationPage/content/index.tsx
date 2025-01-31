import classNames from 'classnames'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import { Box } from '@/ui/atoms'
import { LayoutPageAuthContent } from '../types'
import Footer from './footer'
import Header from './header'

const Content = ({
  i18nTitle,
  footerBox,
  isContextualMenu,
  children,
}: LayoutPageAuthContent) => {
  const tArialabel = useI18Text('commonAriaLabel')

  return (
    <Box
      className={classNames(
        'flex items-center justify-center h-full pb-4 pt-6',
        'sm:p-0'
      )}
    >
      <main
        aria-label={tArialabel('main')}
        className={classNames(
          'grid px-4  rounded-t-3xl w-full h-content-mobile',
          'sm:shadow-all-accent sm:p-4 lg:w-5/6 sm:h-content-destokp',
          {
            'grid-rows-[1fr]': !footerBox,
            'grid-rows-[1fr_auto]': footerBox,
          }
        )}
      >
        <Box
          className={classNames('overflow-auto')}
          style={{
            scrollbarWidth: 'none',
          }}
        >
          <Header isContextualMenu={isContextualMenu} i18nTitle={i18nTitle} />
          <Box>{children}</Box>
        </Box>
        <Footer footerBox={footerBox} />
      </main>
    </Box>
  )
}

export default Content
