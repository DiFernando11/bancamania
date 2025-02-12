import React, { ReactNode } from 'react'
import { Box } from '@/ui/atoms'

const FooterCard = ({ children }: { children: ReactNode }) => {
  return (
    <Box className='flex items-center justify-between gap-3'>{children}</Box>
  )
}

export default FooterCard
