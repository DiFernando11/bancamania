/* eslint-disable max-len */
import React from 'react'

const Ellipsis: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  fill = '#52cc99',
}) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 16 16'
      id='Ellipsis'
    >
      <path
        fill={fill}
        d='M4 8a2 2 0 1 1-3.999.001A2 2 0 0 1 4 8zM10 8a2 2 0 1 1-3.999.001A2 2 0 0 1 10 8zM16 8a2 2 0 1 1-3.999.001A2 2 0 0 1 16 8z'
        className='color444444 svgShape'
      ></path>
    </svg>
  )
}

export default Ellipsis
