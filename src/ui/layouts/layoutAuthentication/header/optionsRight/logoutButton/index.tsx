import React from 'react'
import { useLottieMethods } from '@/shared/hooks'
import { LottieLogout, Text } from '@/ui/atoms'

const LogoutButton = () => {
  const { lottieRef, play, reset } = useLottieMethods()

  return (
    <button
      onMouseEnter={play}
      onMouseLeave={reset}
      className='rounded-md rounded-br-3xl
      flex items-center justify-center gap-2 border px-3 cursor-pointer'
    >
      <LottieLogout ref={lottieRef} />
      <Text>Cerrar Sesión</Text>
    </button>
  )
}

export default LogoutButton
