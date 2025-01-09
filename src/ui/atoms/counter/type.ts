export type CountdownTimerProps = {
  start?: number
  direction?: 'forward' | 'backward'
  reset?: boolean
  onReachTime?: () => void
  targetTime?: number
  stopAt?: number
}

export type TimerRefType = {
  getTime: () => number
  resetTimer: () => void
  setTimeManually: (newTime: number) => void
}
