import Lottie from 'lottie-react'
import { ComponentProps } from 'react'
import { LottieNames } from '@/shared'

export interface LottiePlayerProps
  extends Omit<ComponentProps<typeof Lottie>, 'animationData'> {
  name: LottieNames
  sizeLoading?: string
  isCursorPointer?: boolean
  viewBox?: string
  showLoading?: boolean
  className?: string
}

export type CustomLottiePlayer = Omit<LottiePlayerProps, 'name'>

export interface InteractiveLottiePlayerProps extends LottiePlayerProps {
  mode?: 'cursor' | 'scroll'
  startFrame?: number
  actions: Array<{
    frames: [number] | [number, number]
    type: 'seek' | 'play' | 'stop' | 'loop'
    visibility?: [number, number]
    position?: { [axis in 'x' | 'y']: number | [number, number] }
  }>
}
