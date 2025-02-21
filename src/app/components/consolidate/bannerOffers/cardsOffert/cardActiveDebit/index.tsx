import React from 'react'
import { Box, LottiePlayer, Text } from '@/ui/atoms'
import CardsOffert from '..'

const CardActiveDebit = () => {
  return (
    <CardsOffert className='flex justify-center items-center gap-3 bg-gradient-primary'>
      <LottiePlayer className='w-10 h-10 sm:w-12 sm:h-12' name='paymentCard' />
      <Box>
        <Text textType='font_14_16_fw_bold_fm_rob' className='text-center'>
          Tu tarjeta de débito te esta esperando.
        </Text>
        <Text textType='font_14_16_fw_bold_fm_rob' className='text-center'>
          ¡Actívala ahora!
        </Text>
      </Box>
      <LottiePlayer className='w-10 h-10 sm:w-12 sm:h-12' name='paymentCard' />
    </CardsOffert>
  )
}

export default CardActiveDebit
