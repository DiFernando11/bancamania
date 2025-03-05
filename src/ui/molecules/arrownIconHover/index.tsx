import React from 'react'
import { AnimationContainer, Icon } from '@/ui/atoms'

const ArrowIconHover = ({
  color,
  className,
  isHovered,
}: {
  color: string
  className: string
  isHovered: boolean
}) => {
  return (
    <AnimationContainer
      animate={{ x: isHovered ? 10 : 0 }}
      transition={{ damping: 10, stiffness: 100, type: 'spring' }}
    >
      <Icon name='Arrown' color={color} className={className} />
    </AnimationContainer>
  )
}

export default ArrowIconHover
