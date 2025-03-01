import { TextType } from '@/ui/atoms/text/types'
import { SkeletonLoaderPropsWithoutChildren } from '../../skeletonLoader/types'

export interface TextAccountProps extends SkeletonLoaderPropsWithoutChildren {
  isShow: boolean
  textAccount?: string
  textType?: TextType
}
