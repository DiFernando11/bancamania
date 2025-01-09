'use client'
import { usePathname } from 'next/navigation'
import { findRouteByPath } from '@/shared/utils'

export const useCurrentPath = () => {
  const path = usePathname()

  return findRouteByPath(path)
}
