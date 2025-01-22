'use client'
import { useEffect, useState } from 'react'
import { LottieAnimationData, LottieNames } from '@/shared/types'
import { lotties } from '@/ui/atoms/lotties'

export const useLoadLottie = ({ name }: { name: LottieNames }) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [animationData, setAnimationData] =
    useState<LottieAnimationData | null>(null)

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

  return { animationData, loading }
}
