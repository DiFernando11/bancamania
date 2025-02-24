import { Box } from '@/ui/atoms'
import Skeleton from '../../skeleton'

const SkeletonMovement = () => {
  return (
    <Box className='flex justify-between gap-4 w-full'>
      <Box className='flex gap-4 items-center w-full'>
        <Skeleton className='w-8 h-8 rounded-full min-w-8 min-h-8' />
        <Box className='flex flex-col gap-1 w-full'>
          <Skeleton className='w-full h-3 sm:h-4 max-w-40' />
          <Skeleton className='h-2 sm:h-3 w-full max-w-80' />
        </Box>
      </Box>
      <Box className='flex gap-1 items-center'>
        <Skeleton className='h-3 w-10 sm:h-4' />
        <Skeleton className='h-4 w-4 sm:h-6 sm:w-6 rounded-full' />
      </Box>
    </Box>
  )
}

export default SkeletonMovement
