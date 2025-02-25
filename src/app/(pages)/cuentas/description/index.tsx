import React, { useState } from 'react'
import { Box, Text } from '@/ui/atoms'
import { BitcoinSymbol } from '@/ui/molecules'
import ShowBalance from '@/ui/organisms/cardProduct/showBalance'

const Description = () => {
  const [showBalance, setShowBalance] = useState(true)

  return (
    <Box>
      <BitcoinSymbol text={'100000'} classIcon='w-6 h-6' />
      <ShowBalance isShow={showBalance} setIsShow={setShowBalance} />
      <Text>Cuenta Transaccional</Text>
      <Text>Nro. 22000000</Text>
    </Box>
  )
}

export default Description
