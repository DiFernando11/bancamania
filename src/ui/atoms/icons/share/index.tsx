/* eslint-disable max-len */
import React from 'react'

const Share: React.FC<React.SVGProps<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      id='Share'
    >
      <path
        d='m23.665 8.253-9-8A.998.998 0 0 0 13 1v3.207C9.996 5.013 0 8.765 0 23a1 1 0 0 0 1.928.371c2.965-7.413 8.745-8.96 11.071-9.283V17a1 1 0 0 0 1.666.747l9-8a1 1 0 0 0 0-1.494z'
        fill='#52cc99'
        className='color000000 svgShape'
      ></path>
    </svg>
  )
}

export default Share
