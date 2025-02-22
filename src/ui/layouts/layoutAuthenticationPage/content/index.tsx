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
        'flex items-center justify-center h-full py-6',
        'sm:pb-0'
      )}
    >
      <main
        aria-label={tArialabel('main')}
        className={classNames(
          'grid rounded-t-3xl w-full h-content-mobile max-w-content',
          'sm:h-content-destokp',
          {
            'grid-rows-[1fr]': !footerBox,
            'grid-rows-[1fr_auto]': footerBox,
          }
        )}
      >
        <Box
          className={classNames(
            'overflow-y-scroll overflow-x-hidden scrollbar-custom'
          )}
        >
          <Box
            className={classNames(
              'flex flex-col justify-center px-4 pt-0 pb-4'
            )}
          >
            {i18nTitle && (
              <Header
                isContextualMenu={isContextualMenu}
                i18nTitle={i18nTitle}
              />
            )}
            {children}
          </Box>
        </Box>
        <Footer footerBox={footerBox} />
      </main>
    </Box>
  )
}

export default Content
