import React from 'react'
import { Button, Text } from '@/ui/atoms'
import { ButtonTextProps } from './types'

const ButtonText: React.FC<ButtonTextProps> = ({
  className,
  textType,
  variant,
  text,
  ...rest
}) => {
  return (
    <Button className={className} variant={variant} {...rest}>
      <Text textType={textType}>{text}</Text>
    </Button>
  )
}

export default ButtonText
