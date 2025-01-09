export type TimerRefType = {
  getTime: () => number
  resetTimer: () => void
  setTimeManually: (newTime: number) => void
}
