'use react'
import React from 'react'
import { useI18Text } from '@/application/hooks/commons'
import { useLottieMethods } from '@/shared/hooks'
import { Icon, LottieLogout, Text } from '@/ui/atoms'

const Header = () => {
  const t = useI18Text('commonAriaLabel')
  const { lottieRef, play, reset } = useLottieMethods()

  return (
    <header
      aria-label={t('header')}
      className='px-4 col-span-4 flex items-center'
    >
      <Icon name='Logo' />
      <div className='gap-2 flex flex-row ml-auto'>
        <button
          onMouseEnter={play}
          onMouseLeave={reset}
          className='rounded-md flex
         items-center justify-center gap-2 border pr-2 cursor-pointer'
        >
          <LottieLogout ref={lottieRef} />
          <Text>Cerrar Session</Text>
        </button>
      </div>
    </header>
  )
}

export default Header
