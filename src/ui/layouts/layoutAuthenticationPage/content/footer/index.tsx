import React from 'react'
import { Box } from '@/ui/atoms'
import { LayoutPageAuthFooter } from '../../types'

const Footer = ({ footerBox }: LayoutPageAuthFooter) => {
  if (!footerBox) return null

  return <Box className='pt-4'>{footerBox}</Box>
}

export default Footer
