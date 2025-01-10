'use client'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import React from 'react'
import { useValidToken } from '@/application/hooks'
import { useLogoutRedirect } from '@/application/useCases'
import Box from '@/ui/atoms/box'

const Welcome = () => {
  const { data: sesion } = useSession()
  const { handleActionService: validToken } = useValidToken()
  const { handleActionService } = useLogoutRedirect()

  if (!sesion) return <p>Loading...</p>

  const imageUrl =
    sesion.user.image && typeof sesion.user.image === 'string'
      ? sesion.user.image
      : null

  return (
    <Box className='my-5 flex flex-col gap-5'>
      <h1 className='text-center text-3xl'>Bienvenido usuario</h1>
      <Box className='flex flex-col gap-5'>
        <p>{sesion.user.firstName}</p>
        <p>{sesion.user.lastName}</p>
        <p>{sesion.user.email}</p>
        {sesion.user.phone && <p>{sesion.user.phone}</p>}
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={sesion.user.name ?? 'Avatar del usuario'}
            width={100}
            height={100}
            priority
            className='rounded-full'
          />
        )}
      </Box>
      <button onClick={() => validToken()}>Verificar Token</button>
      <button onClick={handleActionService}>Logout</button>
      <button onClick={() => window.toggleTheme()}>Cambiar Tema</button>
    </Box>
  )
}

export default Welcome
