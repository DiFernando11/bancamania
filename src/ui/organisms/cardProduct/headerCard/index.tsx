import React, { ReactNode } from 'react'
import { Box } from '@/ui/atoms'

const HeaderCard = ({ children }: { children: ReactNode }) => {
  return <Box className='flex justify-between flex-grow'>{children}</Box>
}

export default HeaderCard
