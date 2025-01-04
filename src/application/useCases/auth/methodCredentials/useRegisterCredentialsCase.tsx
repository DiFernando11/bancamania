'use-client'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useAuthentication, useRegisterCredentials } from '@/application/hooks'
import { clientRoutes } from '@/routes/clientRoutes'
import { RegisterCredentials } from '@/shared'

export const useRegisterCredentialsCase = () => {
  const router = useRouter()
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
