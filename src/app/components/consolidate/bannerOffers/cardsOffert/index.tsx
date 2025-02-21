import classNames from 'classnames'
import React, { ReactNode } from 'react'
import { Card } from '@/ui/molecules'

const CardsOffert = ({
  children,
  className,
}: {
  children: ReactNode
  className: string
}) => {
  return (
    <Card
      className={classNames(
        className,
        'border border-accent-200 h-20 p-4 sm:px-12'
      )}
    >
      {children}
    </Card>
  )
}

export default CardsOffert
