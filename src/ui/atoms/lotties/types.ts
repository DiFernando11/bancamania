import Lottie from 'lottie-react'
import { ComponentProps } from 'react'
import { LottieNames } from '@/shared'

export interface LottiePlayerProps
  extends Omit<ComponentProps<typeof Lottie>, 'animationData'> {
  name: LottieNames
  width?: number
  height?: number
  isCursorPointer?: boolean
}

export type CustomLottiePlayer = Omit<LottiePlayerProps, 'name'>

export interface InteractiveLottiePlayerProps extends LottiePlayerProps {
  mode?: 'cursor' | 'scroll'
  actions: Array<{
    frames: [number] | [number, number]
    type: 'play' | 'stop' | 'seek' | 'loop'
    position?: { x: number | [number, number]; y: number | [number, number] }
  }>
}
