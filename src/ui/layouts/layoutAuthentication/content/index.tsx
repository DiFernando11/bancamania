import classNames from 'classnames'
import React, { ReactNode } from 'react'

const Content = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={classNames(
        'row-start-2 col-span-4',
        'sm:col-span-3 sm:col-start-2'
      )}
    >
      {children}
    </div>
  )
}

export default Content
