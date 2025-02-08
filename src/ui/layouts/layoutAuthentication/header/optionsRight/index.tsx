import React from 'react'
import { useMediaQuery } from '@/shared/hooks'
import { isSM } from '@/shared/utils'
import { Box } from '@/ui/atoms'
import LogoutButton from './logoutButton'
import Profile from './profile'

const OptionsRight = () => {
  const { width } = useMediaQuery()

  return (
    <Box className='gap-5 flex flex-row ml-auto'>
      <Profile />
      {isSM(width) && <LogoutButton />}
    </Box>
  )
}

export default OptionsRight
