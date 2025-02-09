import classNames from 'classnames'
import React from 'react'
import { Box } from '@/ui/atoms'
import { LayoutPageAuthFooter } from '../../types'

const Footer = ({ footerBox }: LayoutPageAuthFooter) => {
  if (!footerBox) return null

  return (
    <Box className={classNames('px-4', 'sm:px-8', 'lg:px-4')}>{footerBox}</Box>
  )
}

export default Footer
