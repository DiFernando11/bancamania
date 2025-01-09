import { apiRoutes } from '@/routes/apiRoutes'
import { AuthenticationResponse, Languague } from '@/shared'
import { apiRequestInternal } from '@/shared/utils'

export const changeLanguageService = async ({
  lang,
}: Languague): Promise<AuthenticationResponse> => {
  const response = apiRequestInternal<AuthenticationResponse, Languague>({
    data: {
      lang,
    },

    url: apiRoutes.internas.internalLanguage,
  })

  return response
}
