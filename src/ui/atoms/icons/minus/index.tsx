import React from 'react'

const Minus: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  color = 'white',
}) => {
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      fill='none'
      id='minus'
    >
      <path fill={color} d='M6 13a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2H6Z' />
    </svg>
  )
}

export default Minus
