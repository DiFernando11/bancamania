import { useRef } from 'react'
import { TimerRefType } from './types'

export const useCounter = () => {
  const timerRef = useRef<TimerRefType>(null)

  const handleReset = () => {
    if (timerRef.current) {
      timerRef.current?.resetTimer()

      return
    }
    console.error('Verifica la referencia')
  }

  const handleGetCurrentTime = (): number => {
    if (timerRef.current) {
      const time = timerRef.current.getTime()

      return time
    }
    console.error('Verifica la referencia')

    return 0
  }

  const handleSetTime = (time: number) => {
    if (timerRef.current) {
      timerRef.current?.setTimeManually(time)

      return
    }
    console.error('Verifica la referencia')
  }

  return {
    handleGetCurrentTime,
    handleReset,
    handleSetTime,
    timerRef,
  }
}
