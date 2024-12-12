'use client'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useAuthentication, useLoginPhone } from '@/application/hooks'
import { useAuthStoreLs } from '@/application/zustand/stores'
import { clientRoutes } from '@/routes/clientRoutes'

export const useLoginPhoneCase = () => {
  const router = useRouter()
  const [isVerifyGoogle, setIsVerifyGoogle] = useState<boolean>()
  const [codeCurrent, setCodeCurrent] = useState('')
  const { handleActionService: loginPhone } = useLoginPhone()
  const { handleActionService: login } = useAuthentication()
  const { flushHasValidCode } = useAuthStoreLs()

  const handleSubmit = ({
    codeCurrent,
    phone,
  }: {
    codeCurrent: string
    phone: string
  }) => {
    loginPhone(
      { phone: phone as string, code: codeCurrent },
      {
        onSuccess: async data => {
          if (!data.isUserRegistered) {
            setIsVerifyGoogle(true)

            return
          }
          login(
            {
              token: data.token,
            },
            {
              onSuccess: async () => {
                flushHasValidCode()
                await signIn('credentials', {
                  ...data.user,
                  redirect: false,
                })
                router.push(clientRoutes.home)
              },
            }
          )
        },
        onError: () => {
          setCodeCurrent('')
        },
      }
    )
  }

  return { handleSubmit, isVerifyGoogle, codeCurrent, setCodeCurrent }
}
