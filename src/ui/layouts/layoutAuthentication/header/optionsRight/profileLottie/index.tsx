'use client'
import React from 'react'
import { useMediaQuery } from '@/shared/hooks'
import { isSM } from '@/shared/utils'
import { Avatar } from '@/ui/molecules'

const ProfileLottie = () => {
  const { width } = useMediaQuery()

  return (
    <span
      className=' rounded-full bg-cover bg-center
      flex items-center justify-center shadow-custom'
    >
      <Avatar name='A' size={isSM(width) ? 54 : 44} />
    </span>
  )
}

export default ProfileLottie
