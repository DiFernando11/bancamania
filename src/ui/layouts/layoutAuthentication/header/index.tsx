'use react'
import React from 'react'
import { useI18Text } from '@/application/hooks/commons'
import { useLottieMethods } from '@/shared/hooks'
import { LottieLogout, Text } from '@/ui/atoms'

const Header = () => {
  const t = useI18Text('commonAriaLabel')
  const { lottieRef, play, stop } = useLottieMethods()

  return (
    <header
      aria-label={t('header')}
      className='p-4 col-span-4 border flex items-center'
    >
      Header
      <button
        onMouseEnter={play}
        onMouseLeave={stop}
        className='flex ml-auto items-center justify-center gap-1 border px-2 cursor-pointer'
      >
        <LottieLogout ref={lottieRef} />
        <Text>Cerrar Session</Text>
      </button>
    </header>
  )
}

export default Header
