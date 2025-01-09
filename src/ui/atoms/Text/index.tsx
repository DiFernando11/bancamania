import React from 'react'
import { TextProps } from './types'

const Text: React.FC<TextProps> = ({ children }) => {
  return <p>{children}</p>
}

export default Text
