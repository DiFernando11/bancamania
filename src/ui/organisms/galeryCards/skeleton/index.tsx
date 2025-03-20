import React from 'react'
import { Skeleton } from '@/ui/molecules'
import GaleryCards from '..'
import CardGalery from '../card'

const SkeletonsGalery = ({
  count = 10,
  minWidth = '16rem',
}: {
  count?: number
  minWidth?: string
}) => {
  return (
    <GaleryCards>
      {[...Array(count)].map((_, index) => (
        <CardGalery key={index} minWidth={minWidth}>
          <Skeleton className='w-full h-72' />
        </CardGalery>
      ))}
    </GaleryCards>
  )
}

export default SkeletonsGalery
