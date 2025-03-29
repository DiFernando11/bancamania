import React from 'react'
import { Box } from '@/ui/atoms'
import { Card, Skeleton } from '@/ui/molecules'

const SkeletonsInstallments = ({ count = 10 }: { count?: number }) => {
  return (
    <Box className='flex flex-col gap-8'>
      {[...Array(count)].map((_, index) => (
        <Card key={index} className='flex justify-between items-center'>
          <Box className='space-y-2'>
            <Skeleton className='w-60 h-4' />
            <Skeleton className='w-48 h-4' />
            <Skeleton className='w-56 h-2' />
          </Box>
          <Skeleton className='w-20 h-6' />
        </Card>
      ))}
    </Box>
  )
}

export default SkeletonsInstallments
