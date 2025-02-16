'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { clientRoutes } from '@/routes/clientRoutes'
import { Avatar } from '@/ui/molecules'

const Profile = () => {
  const route = useRouter()

  return (
    <span
      className='rounded-full bg-cover bg-center
      flex items-center justify-center shadow-custom cursor-pointer'
      onClick={() => route.push(clientRoutes.perfil.path)}
    >
      <Avatar
        name='A'
        className='w-10 h-10 text-2xl sm:w-12 sm:h-12 sm:text-3xl'
      />
    </span>
  )
}

export default Profile
