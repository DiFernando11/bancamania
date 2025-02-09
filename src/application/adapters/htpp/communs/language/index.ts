import { apiRoutes } from '@/routes/apiRoutes'
import { GetLanguage, Languague } from '@/shared'
import { apiRequestInternal } from '@/shared/utils'

export const changeLanguageService = async ({
  lang,
}: Languague): Promise<GetLanguage> => {
  const response = apiRequestInternal<GetLanguage, Languague>({
    data: {
      lang,
    },

    url: apiRoutes.internas.internalChangeLanguage,
  })

  return response
}
