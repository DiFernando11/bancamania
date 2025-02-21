import { AwesomeSliderProps } from 'react-awesome-slider'

export interface AwesomeSliderAutoWrapperProps extends AwesomeSliderProps {
  steps: (() => JSX.Element)[]
  classNameStep?: string
  interval?: number
  isStopHover?: boolean
}
