import React from 'react'
import { Box, Icon, Text } from '@/ui/atoms'
import { ButtonQuickAccess } from '@/ui/molecules'

const QuickAccess = () => {
  return (
    <Box className='grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]'>
      <Box className='flex w-full h-24 gap-4'>
        <ButtonQuickAccess className='flex-col'>
          <Icon name='Transfers' className='w-12 h-12 sm:w-16 sm:h-16' />
          <Text>Transfers</Text>
        </ButtonQuickAccess>
        <ButtonQuickAccess className='flex-col'>
          <Icon name='Transfers' className='w-12 h-12 sm:w-16 sm:h-16' />
          <Text>Transfers</Text>
        </ButtonQuickAccess>
      </Box>
      <Box className='flex w-full h-24 gap-4'>
        <ButtonQuickAccess className='flex-col'>
          <Icon name='Transfers' className='w-12 h-12 sm:w-16 sm:h-16' />
          <Text>Transfers</Text>
        </ButtonQuickAccess>
        <ButtonQuickAccess className='flex-col'>
          <Icon name='Transfers' className='w-12 h-12 sm:w-16 sm:h-16' />
          <Text>Transfers</Text>
        </ButtonQuickAccess>
      </Box>
    </Box>
  )
}

export default QuickAccess
