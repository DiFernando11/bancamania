import React from 'react'
import { iconsMap } from '@/ui/atoms/icons/icon/constants'
import { IconProps } from '@/ui/atoms/icons/icon/types'

const Icon: React.FC<IconProps> = ({
  name,
  width,
  height,
  color = 'white',
  ...props
}) => {
  const IconComponent = iconsMap[name]

  if (!IconComponent) return null

  return <IconComponent width={width} height={height} fill={color} {...props} />
}

export default Icon
