import classNames from 'classnames'
import React from 'react'
import { TextProps } from '@/ui/atoms/text/types'

const Text: React.FC<TextProps> = ({
  variant = 'p',
  textType = 'headingMedium',
  className = '',
  children,
}) => {
  const Element = variant

  const combinedClasses = classNames(textType, className)

  return <Element className={combinedClasses}>{children}</Element>
}

export default Text
