import classNames from 'classnames'
import React, { forwardRef } from 'react'
import { Box } from '@/ui/atoms'
import CardGalery from './card'
import SkeletonsGalery from './skeleton'
import { GaleryCardsProps } from './types'

const GaleryCards = forwardRef<HTMLDivElement, GaleryCardsProps>(
  ({ className, children }, ref) => {
    return (
      <Box
        ref={ref}
        className={classNames(
          'flex flex-wrap gap-4 justify-center items-stretch',
          className
        )}
      >
        {children}
      </Box>
    )
  }
)

GaleryCards.displayName = 'GaleryCards'

export default Object.assign(GaleryCards, {
  Card: CardGalery,
  Skeleton: SkeletonsGalery,
})
