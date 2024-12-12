import React, { forwardRef, Ref } from 'react'
import { BoxProps } from './types'

const Box = forwardRef<HTMLDivElement, BoxProps>(function Box(
  { id, children, className },
  ref: Ref<HTMLDivElement>
) {
  return (
    <div ref={ref} id={id} className={className}>
      {children}
    </div>
  )
})

export default Box
