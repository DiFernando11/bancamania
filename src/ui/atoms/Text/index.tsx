import classNames from 'classnames'
import React, { ElementType } from 'react'
import { TextProps } from './types'

const Text = <T extends ElementType = 'p'>({
  variant,
  textType = 'font_16_fw_bold_fm_rob',
  className = '',
  children,
  ...props
}: TextProps<T>) => {
  const Element = (variant || 'p') as ElementType

  const combinedClasses = classNames(textType, className)

  return (
    <Element className={combinedClasses} {...props}>
      {children}
    </Element>
  )
}

export default Text
