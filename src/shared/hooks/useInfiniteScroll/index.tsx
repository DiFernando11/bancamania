'use client'
import { useRef, useCallback, useEffect } from 'react'

export function useInfiniteScroll(
  onIntersect?: () => void,
  enabled: boolean = true
) {
  const observer = useRef<IntersectionObserver | null>(null)
  const savedCallback = useRef<() => void>()

  useEffect(() => {
    savedCallback.current = onIntersect
  }, [onIntersect])

  const refCallback = useCallback(
    (node: HTMLElement | null) => {
      if (!enabled || !node) return

      if (observer.current) observer.current.disconnect()

      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && savedCallback.current) {
          savedCallback.current()
        }
      })

      observer.current.observe(node)
    },
    [enabled]
  )

  return refCallback
}
