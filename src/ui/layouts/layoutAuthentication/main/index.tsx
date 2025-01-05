import classNames from 'classnames'
import React, { ReactNode } from 'react'
import { useI18Text } from '@/application/hooks/commons'

const Main = ({ children }: { children: ReactNode }) => {
  const t = useI18Text('commonAriaLabel')

  return (
    <main
      aria-label={t('main')}
      className={classNames(
        'p-4 row-start-2 col-span-4 border',
        'sm:col-span-3 sm:col-start-2'
      )}
    >
      {children}
    </main>
  )
}

export default Main
