'use-client'
import { signOut } from 'next-auth/react'
import { useLogout } from '@/application/hooks'
import { clientRoutes } from '@/routes/clientRoutes'
import { AuthenticationResponse, SendServiceTypes } from '@/shared'
import { useNavigation } from '@/shared/hooks'

export const useLogoutRedirect = (): SendServiceTypes<
  AuthenticationResponse,
  unknown
> => {
  const router = useNavigation()

  const { handleActionService, isError, isLoading, isSuccess } = useLogout()

  return {
    handleActionService: () => {
      handleActionService(
        {},
        {
          onSuccess: async () => {
            await signOut()
            router.push(clientRoutes.login.path)
          },
        }
      )
    },
    isError,
    isLoading,
    isSuccess,
  }
}
