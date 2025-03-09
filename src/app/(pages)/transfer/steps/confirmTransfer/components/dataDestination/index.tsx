import React from 'react'
import { Box, Text } from '@/ui/atoms'
import { Avatar } from '@/ui/molecules'
import { DataDestinationProps } from '../FormConfirmTransfer/types'

const DataDestination = ({ stepData }: DataDestinationProps) => {
  return (
    <Box className='flex flex-col justify-center items-center'>
      <Avatar
        className={'w-14 h-14 mb-2 text-2xl self-center'}
        name={stepData.owner}
      />
      <Text className='break-all'>{stepData.owner}</Text>
      <Text className='break-all'>{`${stepData.accountNumber} | Alias`}</Text>
      <Text className='break-all'>{stepData.email}</Text>
    </Box>
  )
}

export default DataDestination
