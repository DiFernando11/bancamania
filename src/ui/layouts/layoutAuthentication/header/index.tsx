import React from 'react'
import { useI18Text } from '@/application/hooks/commons'
import { Box, LottieLogout, Text } from '@/ui/atoms'

const Header = () => {
  const t = useI18Text('commonAriaLabel')

  return (
    <header
      aria-label={t('header')}
      className='p-4 col-span-4 border flex items-center'
    >
      Header
      <Box className='flex ml-auto items-center justify-center gap-2'>
        <LottieLogout />
        <Text>Cerrar Session</Text>
      </Box>
    </header>
  )
}

export default Header
