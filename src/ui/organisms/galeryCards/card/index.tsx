import classNames from 'classnames'
import React from 'react'
import { Card } from '@/ui/molecules'
import { CardGaleryProps } from './types'

const CardGalery = ({
  children,
  className,
  minWidth = '16rem',
  ...props
}: CardGaleryProps) => {
  return (
    <Card
      className={classNames('flex-1 w-full h-auto', className)}
      style={{ minWidth }}
      {...props}
    >
      {children}
    </Card>
  )
}

export default CardGalery
