'use client'
import { useState, useEffect } from 'react'

export const useShareText = (message: string) => {
  const [canShare, setCanShare] = useState(false)

  useEffect(() => {
    setCanShare(!!navigator.share)
  }, [])

  const shareViaWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(message)
      alert('Copiado al portapapeles')
    } catch (error) {
      console.error('Error al copiar:', error)
    }
  }

  const shareViaNavigator = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ text: message })
      } catch (error) {
        console.error('Error al compartir:', error)
      }
    } else {
      copyToClipboard()
    }
  }

  return {
    copyToClipboard,
    shareViaNavigator: canShare ? shareViaNavigator : undefined,
    shareViaWhatsApp,
  }
}
