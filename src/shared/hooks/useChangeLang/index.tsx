import { useChangeLanguage } from '@/application/hooks'
import { useGlobalStore } from '@/application/zustand'

export const useChangeLang = () => {
  const { handleActionService, isLoading } = useChangeLanguage()
  const { locale: lng } = useGlobalStore()

  const changeLang = lng === 'en' ? 'es' : 'en'

  const handleChangeLanguage = async () => {
    handleActionService({ lang: changeLang })
  }

  return {
    changeLang,
    currentLang: lng,
    handleChangeLanguage,
    isLoading,
  }
}
