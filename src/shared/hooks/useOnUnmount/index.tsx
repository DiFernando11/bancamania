'use client'
import { useEffect } from 'react'
import { UseOnUnmountProps } from './types'

export const useOnUnmount = ({
  onUnmount,
  onBeforeUnload,
  onVisibilityChange,
}: UseOnUnmountProps) => {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (onBeforeUnload) onBeforeUnload(event)
    }

    const handleVisibilityChange = () => {
      if (document.hidden && onVisibilityChange) {
        onVisibilityChange()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('beforeunload', handleBeforeUnload)

      if (onUnmount) onUnmount()
    }
  }, [])
}
