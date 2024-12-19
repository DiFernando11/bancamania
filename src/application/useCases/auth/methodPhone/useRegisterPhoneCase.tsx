'use client'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useAuthentication, useRegisterPhone } from '@/application/hooks'
import { useAuthStoreLs } from '@/application/zustand/stores'
import { clientRoutes } from '@/routes/clientRoutes'
import { RegisterPhone } from '@/shared'

export const useRegisterPhoneCase = () => {
  const router = useRouter()
  const { flushHasValidCode } = useAuthStoreLs()
  const { handleActionService: registerPhone } = useRegisterPhone()
  const { handleActionService: register } = useAuthentication()

  const handleSubmit = ({ idToken, phone }: RegisterPhone) => {
    registerPhone(
      { idToken, phone: phone as string },
      {
        onError: () => {
          router.push(clientRoutes.login)
        },
        onSuccess: async data => {
          register(
            {
              token: data.token,
            },
            {
              onSuccess: async () => {
                await signIn('credentials', {
                  ...data.user,
                  redirect: false,
                })
                flushHasValidCode()
                router.push(clientRoutes.home)
              },
            }
          )
        },
      }
    )
  }

  return { handleActionService: handleSubmit }
}
