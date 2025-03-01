import classNames from 'classnames'
import React, { useRef } from 'react'
import { useI18Text } from '@/application/hooks'
import { Box, Text } from '@/ui/atoms'
import { LayoutPageAuthContent } from '../types'
import Footer from './footer'
import ShowMobileMenuContext from './ShowMobileMenuContext'

const Content = ({
  i18nTitle,
  footerBox,
  contextualMenu = [],
  children,
}: LayoutPageAuthContent) => {
  const tArialabel = useI18Text('commonAriaLabel')
  const scrollRef = useRef(null)

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
          'grid rounded-t-3xl w-full h-content-mobile max-w-content relative',
          'sm:h-content-destokp',
          {
            'grid-rows-[1fr]': !footerBox,
            'grid-rows-[1fr_auto]': footerBox,
          }
        )}
      >
        {contextualMenu?.length > 0 && (
          <ShowMobileMenuContext
            options={contextualMenu}
            scrollRef={scrollRef}
          />
        )}
        <Box
          ref={scrollRef}
          className={classNames(
            'overflow-y-scroll overflow-x-hidden scrollbar-custom'
          )}
        >
          <Box
            className={classNames(
              'flex flex-col justify-center gap-4 px-4 sm:px-8 pt-0 pb-4'
            )}
          >
            {i18nTitle && (
              <Text variant='h1' textType='font_30_36_fw_bold_fm_rob_text-200'>
                {i18nTitle}
              </Text>
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
