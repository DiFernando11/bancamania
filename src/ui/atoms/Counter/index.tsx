'use client'
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { CountdownTimerProps, TimerRefType } from '@/ui/atoms/counter/type'

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60)
  const secs = seconds % 60

  return `${minutes}:${secs.toString().padStart(2, '0')}`
}

const CountdownTimer = forwardRef<TimerRefType, CountdownTimerProps>(
  (
    {
      start = 0,
      direction = 'forward',
      reset = false,
      onReachTime,
      targetTime,
      stopAt = direction === 'backward' ? 0 : 300,
    },
    ref
  ) => {
    const [time, setTime] = useState<number>(start)
    const timeRef = useRef<number>(start)
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    const startTimer = () => {
      clearTimer()

      timerRef.current = setInterval(() => {
        setTime(prevTime => {
          const newTime = direction === 'forward' ? prevTime + 1 : prevTime - 1

          if (
            (direction === 'forward' && newTime >= stopAt) ||
            (direction === 'backward' && newTime <= 0)
          ) {
            clearTimer()

            return direction === 'backward' ? 0 : stopAt
          }

          timeRef.current = newTime

          return newTime
        })
      }, 1000)
    }

    const clearTimer = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }

    useEffect(() => {
      startTimer()

      return clearTimer
    }, [direction, stopAt])

    useEffect(() => {
      if (reset) {
        clearTimer()
        timeRef.current = start
        setTime(start)
        startTimer()
      }
    }, [reset, start])

    useEffect(() => {
      if (time === targetTime && onReachTime) {
        onReachTime()
      }
    }, [time, targetTime, onReachTime])

    useImperativeHandle(ref, () => ({
      getTime: () => timeRef.current,
      resetTimer: () => {
        clearTimer()
        timeRef.current = start
        setTime(start)
        startTimer()
      },
      setTimeManually: (newTime: number) => {
        clearTimer()
        timeRef.current = newTime
        setTime(newTime)
        startTimer()
      },
    }))

    return (
      <div className='p-4 bg-gray-100 rounded-md text-xl font-bold text-center'>
        {formatTime(time)}
      </div>
    )
  }
)

CountdownTimer.displayName = 'CountdownTimer'

export default CountdownTimer
