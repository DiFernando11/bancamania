'use client'
import { useTranslations } from 'next-intl'

export const useI18Text = (namespace = 'common') => {
  const t = useTranslations(namespace)

  return t
}
