import React from 'react'
import { ArrowButtonNext } from '../../stepSlider/buttonStep'

const NextProduct = ({ onClick }: { onClick?: () => void }) => {
  return (
    <ArrowButtonNext
      onClick={onClick}
      classIcon='w-4 h-4'
      className='w-12 h-12 rounded-full bg-primary-100'
    />
  )
}

export default NextProduct
