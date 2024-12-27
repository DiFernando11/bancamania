'use client'
import { useRouter } from 'next/navigation'
import { changeLanguageService } from '@/application/adapters/htpp'
import { AuthenticationResponse, Languague, SendServiceTypes } from '@/shared'
import { useSendService } from '../../generics'

export const useChangeLanguage = (): SendServiceTypes<
  AuthenticationResponse,
  Languague
> => {
  const router = useRouter()
  const queryResult = useSendService<AuthenticationResponse, Languague>(
    async ({ lang }) => changeLanguageService({ lang })
  )

  return {
    handleActionService: ({ lang }: Languague) => {
      queryResult.mutate(
        { lang },
        {
          onError: () => {
            window.alert('Error changing language:')
          },
          onSuccess: () => router.refresh(),
        }
      )
    },
    isError: queryResult.isError,
    isLoading: queryResult.isPending,
    isSuccess: queryResult.isSuccess,
  }
}
