import { TextType } from '@/ui/atoms/text/types'
import { SkeletonLoaderProps } from '../skeletonLoader/types'

export interface TextLoadingProps extends SkeletonLoaderProps {
  textType?: TextType
  text?: string
  classText?: string
}
