import React, { useState } from 'react'
import { Box, Text } from '@/ui/atoms'
import { Toggle } from '@/ui/molecules'

const ActiveCard = () => {
  const [isChecked, setChecked] = useState(false)

  return (
    <Box className='flex justify-between gap-4 items-center'>
      <Text textType='font_16_18_fm_rob'>
        Activa tu tarjeta para tus compras online
      </Text>
      <Toggle
        width={'4rem'}
        height={'2rem'}
        onChange={() => setChecked(!isChecked)}
        value={isChecked}
      />
    </Box>
  )
}

export default ActiveCard
