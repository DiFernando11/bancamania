import React from 'react'

const Success: React.FC<React.SVGProps<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='3 3 18 18'
      id='Success'
      className={className}
    >
      <g fill='#14ce81' className='color000000 svgShape'>
        <path
          d='M12,3.25A8.75,8.75,0,1,0,20.75,12,8.77,8.77,0,0,0,12,3.25ZM16.7,10l-5,
              5a.75.75,0,0,1-1.06,0L7.3,11.7a.75.75,0,0,1,0-1.06.74.74,0,0,1,1.06,0l2.81,
              2.8L15.64,9A.75.75,0,1,1,16.7,10Z'
          fill='currentColor'
          className='color000000 svgShape'
        ></path>
      </g>
    </svg>
  )
}

export default Success
