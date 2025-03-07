import classNames from 'classnames'
import React from 'react'
import { iconsMap } from '@/ui/atoms/icons/icon/constants'
import { IconProps } from '@/ui/atoms/icons/icon/types'

const Icon: React.FC<IconProps> = ({
  name,
  width,
  height,
  color,
  className,
  ...props
}) => {
  const IconComponent = iconsMap[name]

  if (!IconComponent) return null

  return (
    <IconComponent
      width={width}
      className={classNames(className, 'text-icon-default')}
      height={height}
      fill={color}
      {...props}
    />
  )
}

export default Icon
