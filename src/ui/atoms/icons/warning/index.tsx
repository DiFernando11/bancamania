/* eslint-disable max-len */
import React from 'react'

const Warning: React.FC<React.SVGProps<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      enable-background='new 0 0 32 32'
      viewBox='0 0 32 32'
      id='danger'
      className={className}
    >
      <path
        d='M1.04999,29.75c0.67999,1.08997,1.85999,1.75,3.15002,1.75h23.59998c1.29004,0,2.47003-0.66003,3.15002-1.75c0.66998-1.10004,0.72998-2.45001,0.15997-3.60004l-11.81-23.60999C18.66998,1.28998,17.40997,0.5,16,0.5s-2.66998,0.78998-3.29999,2.03998l-11.81,23.60999C0.32001,27.31,0.38,28.64996,1.04999,29.75z M17.5,10.45996v9.53003c0,0.83002-0.66998,1.5-1.5,1.5s-1.5-0.66998-1.5-1.5v-9.53003c0-0.82996,0.66998-1.5,1.5-1.5S17.5,9.63,17.5,10.45996z M14.5,25.45996V24.37c0-0.83002,0.66998-1.5,1.5-1.5s1.5,0.66998,1.5,1.5v1.08997c0,0.82001-0.66998,1.5-1.5,1.5S14.5,26.27997,14.5,25.45996z'
        fill='currentColor'
        className='color000000 svgShape'
      ></path>
    </svg>
  )
}
// #d4af37
export default Warning
