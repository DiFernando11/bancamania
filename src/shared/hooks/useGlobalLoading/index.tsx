'use client'
import { useEffect, useRef, useMemo } from 'react'
import { useGlobalLoadingStore } from '@/application/zustand'

export const useGlobalLoading = (
  loadingStates: boolean[],
  content?: React.ReactNode
) => {
  const { verifyStatesLoading } = useGlobalLoadingStore()
  const idRef = useRef<string>(crypto.randomUUID())

  const isLoading = useMemo(
    () => loadingStates.some(state => state),
    [loadingStates]
  )

  useEffect(() => {
    verifyStatesLoading(idRef.current, isLoading, content)

    return () => verifyStatesLoading(idRef.current, false)
  }, [isLoading, verifyStatesLoading])
}
