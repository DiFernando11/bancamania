import React from 'react'
import { Box } from '@/ui/atoms'
import ReceiptPreview from '../receiptPreview'

const SkeletonsReceipts = ({ count = 10 }: { count?: number }) => {
  return (
    <Box className='flex flex-col gap-8'>
      {[...Array(count)].map((_, index) => (
        <ReceiptPreview.Skeleton key={index} />
      ))}
    </Box>
  )
}

export default SkeletonsReceipts
