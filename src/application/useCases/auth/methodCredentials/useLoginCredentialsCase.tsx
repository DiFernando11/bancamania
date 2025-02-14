'use-client'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import {
  useAuthentication,
  useLoginCredentials,
  useSetStepOnBoarding,
} from '@/application/hooks'
import { clientRoutes } from '@/routes/clientRoutes'
import {
  AuthenticationResponse,
  LoginCredentials,
  SendServiceTypes,
} from '@/shared'

export const useLoginCredentialsCase = (): SendServiceTypes<
  AuthenticationResponse,
  LoginCredentials
> => {
  const router = useRouter()
  const {
    handleActionService: loginCredentials,
    isError,
    isLoading,
    isSuccess,
  } = useLoginCredentials()
  const { handleActionService: register } = useAuthentication()
  const { handleActionService } = useSetStepOnBoarding()

  const handleSubmit = ({ email, password }: LoginCredentials) => {
    loginCredentials(
      { email, password },
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
                if (data.finishedOnBoarding) {
                  router.push(clientRoutes.consolidada.path)
                } else {
                  handleActionService(
                    { step: 0 },
                    {
                      onSuccess: () => {
                        router.push(clientRoutes.onBoarding.path)
                      },
                    }
                  )
                }
              },
            }
          )
        },
      }
    )
  }

  return {
    handleActionService: handleSubmit,
    isError,
    isLoading,
    isSuccess,
  }
}
