import classNames from 'classnames'
import React, { ReactNode } from 'react'

const Content = ({ children }: { children: ReactNode }) => {
  return (
    <div className={classNames('row-start-2 col-span-2', 'sm:col-span-1')}>
      {children}
    </div>
  )
}

export default Content
