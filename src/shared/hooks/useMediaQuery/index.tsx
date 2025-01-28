'use client'
import { useState, useEffect } from 'react'

export const useMediaQuery = () => {
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: document.documentElement.clientHeight,
        width: document.documentElement.clientWidth,
      })
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return dimensions
}
