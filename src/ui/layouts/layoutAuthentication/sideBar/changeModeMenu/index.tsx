'use client'
import React, { useEffect, useState } from 'react'
import { useLottieMethods } from '@/shared/hooks'
import { LottieChangeMode, Text } from '@/ui/atoms'

const ChangeModeMenu = () => {
  const { lottieRef, playSegments, setSpeed } = useLottieMethods()
  const [isDark, setIsDark] = useState<boolean>(false)
  const [currentIframe, setCurrentIframe] = useState<number>(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isCurrentDark = window.currentTheme === 'dark'
      setIsDark(isCurrentDark)
      setCurrentIframe(isCurrentDark ? 0 : 60)
    }
  }, [])

  const handleClick = () => {
    setSpeed(2)
    if (isDark) {
      playSegments([20, 60], true)
    } else {
      playSegments([60, 20], true)
    }
    setIsDark(!isDark)
    window.toggleTheme()
  }

  return (
    <li>
      <button className='flex items-center gap-2' onClick={handleClick}>
        <Text>Modo</Text>
        <LottieChangeMode startFrame={currentIframe} ref={lottieRef} />
      </button>
    </li>
  )
}

export default ChangeModeMenu
