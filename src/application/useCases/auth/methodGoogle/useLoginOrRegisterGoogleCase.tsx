'use-client'
import { signIn } from 'next-auth/react'
import {
  useAuthentication,
  useLoginOrRegisterGoogle,
} from '@/application/hooks'
import { clientRoutes } from '@/routes/clientRoutes'
import { RegisterOrLoginGoogle } from '@/shared'
import { useNavigation } from '@/shared/hooks'

export const useLoginOrRegisterGoogleCase = () => {
  const router = useNavigation()
  const { handleActionService: loginOrRegisterGoogle } =
    useLoginOrRegisterGoogle()
  const { handleActionService: register } = useAuthentication()

  const handleSubmit = ({ idToken }: RegisterOrLoginGoogle) => {
    loginOrRegisterGoogle(
      { idToken },
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
                router.push(clientRoutes.consolidada.path)
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
