import React from 'react'
import { Box } from '@/ui/atoms'
import { CardContactProps } from './types'

const CardContact = ({ handleClick }: CardContactProps) => {
  return <Box onClick={handleClick}>Mi contacto</Box>
}

export default CardContact
