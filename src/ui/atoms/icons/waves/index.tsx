/* eslint max-len: ["off"] */
import React from 'react'

const Waves: React.FC<React.SVGProps<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      className={className}
      id='Wireless'
    >
      <g id='Layer_2' fill='#ffffff' className='color000000 svgShape'>
        <path
          d='M4,13.7c3.5,0,6.3,2.8,6.3,6.3c0,0.6,0.4,1,1,1s1-0.4,1-1c0-4.6-3.7-8.3-8.3-8.3c-0.6,0-1,0.4-1,1S3.4,13.7,4,13.7z'
          fill='#ffffff'
          className='color000000 svgShape'
        ></path>
        <path
          d='M4 9.4c5.9 0 10.6 4.8 10.6 10.6 0 .6.4 1 1 1s1-.4 1-1C16.6 13 11 7.4 4 7.4c-.6 0-1 .4-1 1S3.4 9.4 4 9.4zM4 18.1c1.1 0 1.9.9 1.9 1.9 0 .6.4 1 1 1s1-.4 1-1c0-2.2-1.8-3.9-3.9-3.9-.6 0-1 .4-1 1S3.4 18.1 4 18.1z'
          fill='#ffffff'
          className='color000000 svgShape'
        ></path>
        <path
          d='M4,5c8.3,0,15,6.7,15,15c0,0.6,0.4,1,1,1s1-0.4,1-1c0-9.4-7.6-17-17-17C3.4,3,3,3.4,3,4S3.4,5,4,5z'
          fill='#ffffff'
          className='color000000 svgShape'
        ></path>
      </g>
    </svg>
  )
}

export default Waves
