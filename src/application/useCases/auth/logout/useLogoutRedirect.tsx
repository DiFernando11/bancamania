'use-client'
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { useLogout } from '@/application/hooks'
import { clientRoutes } from '@/routes/clientRoutes'
import { AuthenticationResponse, SendServiceTypes } from '@/shared'

export const useLogoutRedirect = (): SendServiceTypes<
  AuthenticationResponse,
  unknown
> => {
  const router = useRouter()

  const { handleActionService, isError, isLoading, isSuccess } = useLogout()

  return {
    handleActionService: () => {
      handleActionService(
        {},
        {
          onSuccess: async () => {
            await signOut()
            router.push(clientRoutes.login)
          },
        }
      )
    },
    isError,
    isLoading,
    isSuccess,
  }
}
