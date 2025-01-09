'use client'
import Link from 'next/link'
import React from 'react'
import { clientRoutes } from '@/routes/clientRoutes'

export const LoginWithCreedentials = () => {
  return (
    <Link
      className='border text-center p-3'
      href={clientRoutes.loginCredentials.path}
    >
      Inicia con credenciales
    </Link>
  )
}
