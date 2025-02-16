import React from 'react'
import { useI18Text } from '@/application/hooks'
import { useLogoutRedirect } from '@/application/useCases'
import { useLottieMethods } from '@/shared/hooks'
import { Box, LottieLogout, Text } from '@/ui/atoms'

const LogoutButton = () => {
  const { lottieRef, play, reset, setSpeed } = useLottieMethods()
  const { handleActionService } = useLogoutRedirect()
  const t = useI18Text()

  const playAnimation = () => {
    play()
    setSpeed(2)
  }

  return (
    <button
      onClick={handleActionService}
      onMouseEnter={playAnimation}
      onMouseLeave={reset}
      className='rounded-md rounded-br-3xl
      flex items-center justify-between border cursor-pointer px-3'
      style={{ minWidth: '180px' }}
    >
      <Box>
        <LottieLogout ref={lottieRef} />
      </Box>
      <Text textType='font_16_fw_bold_fm_rob' className='flex-grow text-center'>
        {t('logout')}
      </Text>
    </button>
  )
}

export default LogoutButton
