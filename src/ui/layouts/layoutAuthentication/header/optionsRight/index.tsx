import React from 'react'
import { useMediaQuery } from '@/shared/hooks'
import { isSM } from '@/shared/utils'
import { AnimationContainer } from '@/ui/atoms'
import LogoutButton from './logoutButton'
import ProfileLottie from './profileLottie'

const OptionsRight = () => {
  const { width } = useMediaQuery()

  const variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
      x: 0,
    },
  }

  return (
    <AnimationContainer
      initial='hidden'
      animate='visible'
      variants={variants}
      className='gap-5 flex flex-row ml-auto'
    >
      <ProfileLottie />
      {isSM(width) && <LogoutButton />}
    </AnimationContainer>
  )
}

export default OptionsRight
