'use client'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useGlobalLoadingStore } from '@/application/zustand'
import { LoadingMaxScreen } from '@/ui/molecules'

const GlobalLoading = () => {
  const { globalLoading } = useGlobalLoadingStore()

  const [container, setContainer] = useState<HTMLElement | null>(null)

  useEffect(() => {
    let div = document.getElementById('loading-root')

    if (!div) {
      div = document.createElement('div')
      div.id = 'loading-root'
      document.body.appendChild(div)
    }

    setContainer(div)

    return () => {
      if (div && div.parentNode) {
        div.parentNode.removeChild(div)
      }
    }
  }, [])

  if (!container) return null

  return createPortal(<LoadingMaxScreen isLoading={globalLoading} />, container)
}

export default GlobalLoading
