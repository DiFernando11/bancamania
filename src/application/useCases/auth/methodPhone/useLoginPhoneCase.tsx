'use client'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useAuthentication, useLoginPhone } from '@/application/hooks'
import { useAuthStoreLs } from '@/application/zustand/stores'
import { clientRoutes } from '@/routes/clientRoutes'
import { useNavigation } from '@/shared/hooks'

export const useLoginPhoneCase = () => {
  const router = useNavigation()
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
      { code: codeCurrent, phone: phone as string },
      {
        onError: () => {
          setCodeCurrent('')
        },
        onSuccess: async data => {
          if (!data.isUserRegistered) {
            setIsVerifyGoogle(true)

            return
          }
          login(
            {
              refreshToken: data.refreshToken,
              token: data.token,
            },
            {
              onSuccess: async () => {
                flushHasValidCode()
                await signIn('credentials', {
                  ...data.user,
                  redirect: false,
                })
                router.push(clientRoutes.consolidada.path)
              },
            }
          )
        },
      }
    )
  }

  return { codeCurrent, handleSubmit, isVerifyGoogle, setCodeCurrent }
}
