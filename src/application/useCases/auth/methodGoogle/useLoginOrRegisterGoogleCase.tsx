'use-client'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import {
  useAuthentication,
  useLoginOrRegisterGoogle,
} from '@/application/hooks'
import { clientRoutes } from '@/routes/clientRoutes'
import { RegisterOrLoginGoogle } from '@/shared'

export const useLoginOrRegisterGoogleCase = () => {
  const router = useRouter()
  const { handleActionService: loginOrRegisterGoogle } =
    useLoginOrRegisterGoogle()
  const { handleActionService: register } = useAuthentication()

  const handleSubmit = ({ idToken }: RegisterOrLoginGoogle) => {
    loginOrRegisterGoogle(
      { idToken },
      {
        onError: () => {
          router.push(clientRoutes.login)
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
                router.push(clientRoutes.home)
              },
            }
          )
        },
      }
    )
  }

  return {
    handleActionService: handleSubmit,
  }
}
