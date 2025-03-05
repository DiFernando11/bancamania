import React from 'react'
import { Box, Text } from '@/ui/atoms'
import { SelectedOption } from '@/ui/organisms'
import SkeletonReceipt from './skeleton'
import { ReceiptPreviewProps } from './types'

const ReceiptPreview = ({
  description,
  title,
  onClick,
}: ReceiptPreviewProps) => {
  return (
    <SelectedOption onClick={onClick}>
      <Box>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </Box>
    </SelectedOption>
  )
}

ReceiptPreview.Skeleton = SkeletonReceipt

export default ReceiptPreview
