'use client'
import { useEffect, useRef, useState } from 'react'
import { LottieAnimationData, LottieNames } from '@/shared/types'
import { lotties } from '@/ui/atoms/lotties'

export const useLoadLottie = ({
  name,
  viewBox,
}: {
  name: LottieNames
  viewBox?: string
}) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [animationData, setAnimationData] =
    useState<LottieAnimationData | null>(null)

  const lottieContainerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (lottieContainerRef.current && viewBox) {
      const svg = lottieContainerRef?.current?.querySelector('svg')
      if (svg) {
        svg.setAttribute('viewBox', viewBox)
      } else {
        const observer = new MutationObserver(() => {
          const svg = lottieContainerRef?.current?.querySelector('svg')

          if (svg) {
            svg.setAttribute('viewBox', viewBox)
            observer.disconnect()
          }
        })

        observer.observe(lottieContainerRef.current, {
          childList: true,
          subtree: true,
        })

        return () => observer.disconnect()
      }
    }
  }, [loading, viewBox])

  useEffect(() => {
    const loadAnimation = async (animationName: string) => {
      try {
        const animation = await import(`../../../ui/atoms/lotties/${name}.json`)
        setAnimationData(animation)
      } catch (error) {
        console.error(`Error al cargar la animación ${animationName}:`, error)
        setAnimationData(lotties.maintenance)
      } finally {
        setLoading(false)
      }
    }
    loadAnimation(name)
  }, [name])

  return { animationData, loading, lottieContainerRef }
}
