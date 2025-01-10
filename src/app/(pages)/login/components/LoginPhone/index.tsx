import Link from 'next/link'
import React from 'react'
import { clientRoutes } from '@/routes/clientRoutes'

export const LoginPhone = () => {
  return (
    <Link
      className='border text-center p-3'
      href={clientRoutes.loginPhone.path}
    >
      Inicia con tu telefono
    </Link>
  )
}
