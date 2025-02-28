import { TextType } from '@/ui/atoms/text/types'
import { SkeletonLoaderPropsWithoutChildren } from '../skeletonLoader/types'

export interface SelectedOptionProps
  extends SkeletonLoaderPropsWithoutChildren {
  text: string
  onClick: () => void
  className?: string
  textType?: TextType
  classIcon?: string
  IconAction?: React.ReactNode
}
