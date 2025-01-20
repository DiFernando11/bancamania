import { iconsMap } from '@/ui/atoms/icons/icon/constants'

export type IconNames = keyof typeof iconsMap

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconNames
  width?: number
  height?: number
  color?: string
}
