'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { clientRoutes } from '@/routes/clientRoutes'
import { useMediaQuery } from '@/shared/hooks'
import { isSM } from '@/shared/utils'
import { Avatar } from '@/ui/molecules'

const Profile = () => {
  const { width } = useMediaQuery()
  const route = useRouter()

  return (
    <span
      className='rounded-full bg-cover bg-center
      flex items-center justify-center shadow-custom cursor-pointer'
      onClick={() => route.push(clientRoutes.perfil.path)}
    >
      <Avatar name='A' size={isSM(width) ? 54 : 44} />
    </span>
  )
}

export default Profile
