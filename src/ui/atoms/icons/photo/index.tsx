/* eslint-disable max-len */
import React from 'react'

const Photo: React.FC<React.SVGProps<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='16 10 220 220'
      id='Image'
      className={className}
    >
      <rect width='256' height='256' fill='none'></rect>
      <path
        d='M168.001,100.00017v.00341a12.00175,12.00175,0,1,1,0-.00341ZM232,56V200a16.01835,16.01835,0,0,1-16,16H40a16.01835,16.01835,0,0,1-16-16V56A16.01835,16.01835,0,0,1,40,40H216A16.01835,16.01835,0,0,1,232,56Zm-15.9917,108.6936L216,56H40v92.68575L76.68652,112.0002a16.01892,16.01892,0,0,1,22.62793,0L144.001,156.68685l20.68554-20.68658a16.01891,16.01891,0,0,1,22.62793,0Z'
        fill='#14ce81'
        className='color000000 svgShape'
      ></path>
    </svg>
  )
}

export default Photo
