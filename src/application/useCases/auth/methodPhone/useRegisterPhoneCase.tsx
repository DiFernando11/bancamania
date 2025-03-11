'use client'
import { signIn } from 'next-auth/react'
import { useAuthentication, useRegisterPhone } from '@/application/hooks'
import { useAuthStoreLs } from '@/application/zustand/stores'
import { clientRoutes } from '@/routes/clientRoutes'
import { RegisterPhone } from '@/shared'
import { useNavigation } from '@/shared/hooks'

export const useRegisterPhoneCase = () => {
  const router = useNavigation()
  const { flushHasValidCode } = useAuthStoreLs()
  const { handleActionService: registerPhone } = useRegisterPhone()
  const { handleActionService: register } = useAuthentication()

  const handleSubmit = ({ idToken, phone }: RegisterPhone) => {
    registerPhone(
      { idToken, phone: phone as string },
      {
        onError: () => {
          router.push(clientRoutes.login.path)
        },
        onSuccess: async data => {
          register(
            {
              refreshToken: data.refreshToken,
              token: data.token,
            },
            {
              onSuccess: async () => {
                await signIn('credentials', {
                  ...data.user,
                  redirect: false,
                })
                flushHasValidCode()
                router.push(clientRoutes.consolidada.path)
              },
            }
          )
        },
      }
    )
  }

  return { handleActionService: handleSubmit }
}
