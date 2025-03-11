'use-client'
import { signIn } from 'next-auth/react'
import { useAuthentication, useRegisterCredentials } from '@/application/hooks'
import { clientRoutes } from '@/routes/clientRoutes'
import { RegisterCredentials } from '@/shared'
import { useNavigation } from '@/shared/hooks'

export const useRegisterCredentialsCase = () => {
  const router = useNavigation()
  const { handleActionService: registerCredentials } = useRegisterCredentials()
  const { handleActionService: register } = useAuthentication()

  const handleSubmit = ({
    code,
    firstName,
    lastName,
    email,
    password,
  }: RegisterCredentials) => {
    registerCredentials(
      { code, email, firstName, lastName, password },
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
