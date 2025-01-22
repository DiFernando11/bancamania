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
