import classNames from 'classnames'
import React from 'react'

const Footer = () => {
  return (
    <div
      className={classNames(
        'shadow-top-accent px-4 rounded-t-xl',
        'sm:hidden',
        'row-start-3 row-end-4 col-span-1'
      )}
    >
      Footer
    </div>
  )
}

export default Footer
