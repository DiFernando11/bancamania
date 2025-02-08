import React from 'react'
import { useI18Text } from '@/application/hooks'
import { useLottieMethods } from '@/shared/hooks'
import { Box, LottieLogout, Text } from '@/ui/atoms'

const LogoutButton = () => {
  const { lottieRef, play, reset, setSpeed } = useLottieMethods()
  const t = useI18Text()

  const playAnimation = () => {
    play()
    setSpeed(2)
  }

  return (
    <button
      onMouseEnter={playAnimation}
      onMouseLeave={reset}
      className='rounded-md rounded-br-3xl
      flex items-center justify-between border cursor-pointer pr-3 gap-4'
      style={{ minWidth: '180px' }}
    >
      <Box className='w-12 flex-shrink-0'>
        <LottieLogout ref={lottieRef} />
      </Box>
      <Text textType='font_16_fw_bold_fm_rob' className='flex-grow text-center'>
        {t('logout')}
      </Text>
    </button>
  )
}

export default LogoutButton
