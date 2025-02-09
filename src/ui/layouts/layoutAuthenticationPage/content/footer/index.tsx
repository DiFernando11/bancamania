import React from 'react'
import { Box } from '@/ui/atoms'
import { LayoutPageAuthFooter } from '../../types'

const Footer = ({ footerBox }: LayoutPageAuthFooter) => {
  if (!footerBox) return null

  return <Box className='px-4 t-4'>{footerBox}</Box>
}

export default Footer
