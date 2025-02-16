import { AwesomeSliderProps } from 'react-awesome-slider'

export interface StepProps {
  next: (stepIndex?: number) => void
  prev: () => void
  stepCurrent: number
  stepIsActive: boolean
  isLastStep: boolean
}

export interface AwesomeSliderWrapperProps extends AwesomeSliderProps {
  steps: ((props: StepProps) => JSX.Element)[]
  initialStep?: number
  classNameStep?: string
}
