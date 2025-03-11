import React from 'react'
import { Box } from '@/ui/atoms'
import CardContact from '..'

const SkeletonContacts = ({ count = 10 }: { count?: number }) => {
  return (
    <Box className='flex flex-col gap-8'>
      {[...Array(count)].map((_, index) => (
        <CardContact.Skeleton
          key={index}
          isFirstLetter={index === 0 || index === 4}
        />
      ))}
    </Box>
  )
}

export default SkeletonContacts
