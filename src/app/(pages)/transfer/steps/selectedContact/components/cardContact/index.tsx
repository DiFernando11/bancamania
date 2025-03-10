import React from 'react'
import { Box, Text } from '@/ui/atoms'
import { CardContactProps } from './types'

const CardContact = ({ handleClick, data }: CardContactProps) => {
  return (
    <Box onClick={handleClick}>
      <Text> {data?.alias}</Text>
      <Text>{data?.account?.accountNumber}</Text>
      <Text>{data?.account?.owner}</Text>
      <Text>{data?.account?.user?.email}</Text>
    </Box>
  )
}

export default CardContact
