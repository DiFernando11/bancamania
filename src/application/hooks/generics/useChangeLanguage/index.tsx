'use client'
import { useRouter } from 'next/navigation'
import { changeLanguageService } from '@/application/adapters/htpp'
import { GetLanguage, Languague, SendServiceTypes } from '@/shared'
import { useSendService } from '../../generics'

export const useChangeLanguage = (): SendServiceTypes<
  GetLanguage,
  Languague
> => {
  const router = useRouter()
  const queryResult = useSendService<GetLanguage, Languague>(async ({ lang }) =>
    changeLanguageService({ lang })
  )

  return {
    data: queryResult.data,
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
