import React from 'react'
import { Box } from '@/ui/atoms'
import { Card } from '@/ui/molecules'

const CardOffert = ({ children }) => {
  return <Card className='bg-red-500 h-20 p-4'>{children}</Card>
}

export default CardOffert
