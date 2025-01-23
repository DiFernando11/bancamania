'use client'
import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import { useI18Text } from '@/application/hooks'
import { LayoutAuthenticationPageProps } from './types'

const LayoutAuthenticationPage = ({
  i18nTitle,
  footerBox,
  contextualMenu,
  children,
}: LayoutAuthenticationPageProps) => {
  const t = useI18Text(i18nTitle)
  const tArialabel = useI18Text('commonAriaLabel')
  const [footerHeight, setFooterHeight] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const footerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!footerBox) return setIsLoading(false)
    if (footerBox) {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight)
        setIsLoading(false)
      }
    }
  }, [footerBox])

  return (
    <div
      className={classNames('grid gap-2', 'h-full', {
        'grid-cols-1': !contextualMenu,
        'md:grid-cols-[1fr_180px]': contextualMenu,
      })}
    >
      <div className='flex items-center justify-center h-full'>
        <main
          aria-label={tArialabel('main')}
          className={classNames(
            'border grid p-4',
            'max-w-[640px] h-full w-full',
            {
              'grid-rows-[1fr]': !footerBox,
              'grid-rows-[1fr_auto]': footerBox,
            }
          )}
        >
          {isLoading ? (
            <div>loading</div>
          ) : (
            <div
              className='overflow-auto pb-3'
              style={{
                height: `calc(100vh - ${122 + footerHeight}px)`,
                scrollbarWidth: 'none',
              }}
            >
              <div className='flex items-center '>
                <h1>{t('title')}</h1>
                {contextualMenu && (
                  <span className={classNames('ml-auto flex', 'md:hidden')}>
                    ...
                  </span>
                )}
              </div>
              <div>{children}</div>
            </div>
          )}
          {footerBox && (
            <div ref={footerRef} className='flex items-center justify-center'>
              {footerBox}
            </div>
          )}
        </main>
      </div>
      {contextualMenu && (
        <div
          className={classNames(
            'hidden border items-center justify-center',
            'md:flex',
            'h-20'
          )}
        >
          Menu contextual
        </div>
      )}
    </div>
  )
}

export default LayoutAuthenticationPage
