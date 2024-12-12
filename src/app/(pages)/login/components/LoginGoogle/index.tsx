'use client'
import { signIn } from 'next-auth/react'
import React from 'react'

export const LoginGoogle = () => {
  const handleGoogleLogin = async () => {
    signIn('google', {
      callbackUrl: `${window.location.origin}/login/verifyGoogle?flow=google`,
    })
  }

  return (
    <button className='border p-3' onClick={handleGoogleLogin}>
      Login with Google
    </button>
  )
}
