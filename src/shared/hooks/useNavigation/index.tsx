'use client'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useGlobalLoading } from '../useGlobalLoading'

export const useNavigation = () => {
  const [isLoading, setIsLoading] = useState(false)
  useGlobalLoading([isLoading])
  const { push, back, refresh } = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    setIsLoading(false)

    return () => setIsLoading(false)
  }, [pathname])

  const handlePush = (path: string) => {
    setIsLoading(true)
    push(path)
  }

  return { back, push: handlePush, refresh }
}
