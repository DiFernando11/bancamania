'use client'
import { useTranslations } from 'next-intl'
import React from 'react'
import { useChangeLanguage } from '@/application/hooks'
import Box from '@/ui/atoms/box'
import { LoginGoogle, LoginPhone, LoginWithCreedentials } from './components'

const LoginPage = () => {
  const t = useTranslations('common')
  const { handleActionService } = useChangeLanguage()

  return (
    <Box className='w-full h-screen my-5 flex flex-col gap-10'>
      <button onClick={() => handleActionService({ lang: 'es' })}>Es</button>
      <button onClick={() => handleActionService({ lang: 'en' })}>En</button>
      <h1>{t('hello')}</h1>
      <h1 className='text-center text-3xl'>Ingresa con tu opcion preferida</h1>
      <LoginGoogle />
      <LoginPhone />
      <LoginWithCreedentials />
    </Box>
  )
}

export default LoginPage
