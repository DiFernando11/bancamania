import React from 'react'
import { useI18Text } from '@/application/hooks'
import { Box, LottiePlayer, Text } from '@/ui/atoms'
import CardsOffert from '..'

const CardPresentation = () => {
  const t = useI18Text('home')

  return (
    <CardsOffert className='flex justify-center bg-gradient-primary'>
      <Box className='flex justify-center items-center overflow-hidden'>
        <Text className='text-center' textType='font_14_16_fw_bold_fm_rob'>
          {t('offertHome')}
        </Text>
        <LottiePlayer
          className='w-20 h-20'
          name='manGreatting'
          viewBox='280 -20 800 800'
        />
      </Box>
    </CardsOffert>
  )
}

export default CardPresentation
