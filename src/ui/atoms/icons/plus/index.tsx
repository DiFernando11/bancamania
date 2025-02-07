import React from 'react'

const Plus: React.FC<React.SVGProps<SVGSVGElement>> = ({
  width = 60,
  height = 60,
  color = 'white',
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill-rule='evenodd'
      width={width}
      height={height}
      fill={color}
    >
      <path
        fill-rule='evenodd'
        d='M 11 2 L 11 11 L 2 11 L 2 13 L 11 13
           L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z'
      />
    </svg>
  )
}

export default Plus
