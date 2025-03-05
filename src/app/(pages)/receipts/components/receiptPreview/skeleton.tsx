import { Box } from '@/ui/atoms'
import { Skeleton } from '@/ui/molecules'

const SkeletonReceipt = () => {
  return (
    <Box className='flex justify-between gap-4 w-full'>
      <Box className='flex flex-col gap-2 w-full'>
        <Skeleton className='w-full h-4 max-w-40' />
        <Skeleton className='h-4 w-full max-w-80' />
      </Box>
      <Box className='flex gap-1 items-center'>
        <Skeleton className='h-4 w-4 sm:h-6 sm:w-6 rounded-full' />
      </Box>
    </Box>
  )
}

export default SkeletonReceipt
