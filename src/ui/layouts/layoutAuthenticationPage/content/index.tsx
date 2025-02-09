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
          'grid rounded-t-3xl w-full h-content-mobile',
          'sm:shadow-all-accent lg:w-5/6 sm:h-content-destokp sm:pt-4',
          {
            'grid-rows-[1fr]': !footerBox,
            'grid-rows-[1fr_auto]': footerBox,
          }
        )}
      >
        <Box className={classNames('overflow-auto scrollbar-custom')}>
          <Box className='pl-4 pr-2'>
            <Header isContextualMenu={isContextualMenu} i18nTitle={i18nTitle} />
            <Box>{children}</Box>
          </Box>
        </Box>
        <Footer footerBox={footerBox} />
      </main>
    </Box>
  )
}

export default Content
