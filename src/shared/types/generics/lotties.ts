import { lotties } from '@/ui/atoms/lotties'

export interface LottieAnimationData {
  v: string
  fr: number
  ip: number
  op: number
  w: number
  h: number
  layers: object[]
}

export type LottieNames = keyof typeof lotties

export interface LottiePlayerRef {
  destroy: () => void
  getDuration: (inFrames?: boolean) => number | undefined
  goToAndPlay: (frame: number, isFrame?: boolean) => void
  goToAndStop: (frame: number, isFrame?: boolean) => void
  pause: () => void
  play: () => void
  playSegments: (segments: [number, number], forceFlag?: boolean) => void
  setSpeed: (speed: number) => void
  setSubframe: (useSubFrames: boolean) => void
  stop: () => void
}
