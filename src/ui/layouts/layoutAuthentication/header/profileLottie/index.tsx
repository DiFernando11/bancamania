'use client'
import React from 'react'
import { useLottieMethods } from '@/shared/hooks'
import { LottiePlayerInteractive } from '@/ui/atoms'
import { Avatar } from '@/ui/molecules'

const ProfileLottie = () => {
  const { lottieRef, play, pause } = useLottieMethods()

  return (
    <span
      className='relative rounded-full bg-cover bg-center flex items-center justify-center'
      onMouseEnter={pause}
      onMouseLeave={play}
    >
      <Avatar name='A' size={60} className='absolute' />
      <LottiePlayerInteractive
        ref={lottieRef}
        loop={true}
        autoplay={true}
        actions={[]}
        name='profile'
        sizeLottie={60}
        viewBox='70 60 260 260'
      />
    </span>
  )
}

export default ProfileLottie
