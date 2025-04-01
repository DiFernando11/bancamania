/* eslint-disable max-len */
import React from 'react'

const Loans: React.FC<React.SVGProps<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      id='loan'
      className={className}
    >
      <defs>
        <linearGradient
          id='a'
          x1='3.61'
          x2='18.71'
          y1='22.08'
          y2='6.99'
          gradientUnits='userSpaceOnUse'
        >
          <stop
            offset='0'
            stopColor='#52cc99'
            className='stopColor333399 svgShape'
          ></stop>
          <stop
            offset='.1'
            stopColor='#319b6f'
            className='stopColor3c319b svgShape'
          ></stop>
          <stop
            offset='.26'
            stopColor='#2ba170'
            className='stopColor542ba1 svgShape'
          ></stop>
          <stop
            offset='.47'
            stopColor='#21ab71'
            className='stopColor7c21ab svgShape'
          ></stop>
          <stop
            offset='.7'
            stopColor='#13b974'
            className='stopColorb313b9 svgShape'
          ></stop>
          <stop
            offset='.97'
            stopColor='#02f992'
            className='stopColorf902ca svgShape'
          ></stop>
          <stop
            offset='.99'
            stopColor='#00ff94'
            className='stopColorff00cc svgShape'
          ></stop>
        </linearGradient>
      </defs>
      <g fill='#000000' className='color000000 svgShape'>
        <path
          fill='url(#a)'
          d='M20.7,14.48a2.76,2.76,0,0,0-2.57-.3l-.11.05-.95.56a9.24,9.24,0,0,1-2.44,1,2.13,2.13,0,0,0,.12-.72,2.28,2.28,0,0,0-1.86-2.18,13.41,13.41,0,0,0-5.78,0L6.45,13A1.77,1.77,0,0,0,5,12.25H4A1.76,1.76,0,0,0,2.25,14v6A1.76,1.76,0,0,0,4,21.75H5a1.76,1.76,0,0,0,1.49-.84l6.18.61a6.23,6.23,0,0,0,.74,0,7.23,7.23,0,0,0,3.84-1.08l3.07-1.91a2.42,2.42,0,0,0,1.43-2.16A2.32,2.32,0,0,0,20.7,14.48ZM5.25,20a.25.25,0,0,1-.25.25H4A.25.25,0,0,1,3.75,20V14A.25.25,0,0,1,4,13.75H5a.25.25,0,0,1,.25.25Zm14.41-2.78-.09.05-3.11,1.94a5.8,5.8,0,0,1-3.64.82l-6.07-.6V14.49l.69-.15a11.84,11.84,0,0,1,5.13,0,.79.79,0,0,1,.68.72.87.87,0,0,1-.93.75H10a.75.75,0,0,0-.16,1.48,11.22,11.22,0,0,0,8-1.21l.89-.52a1.34,1.34,0,0,1,1.14.15.87.87,0,0,1,.4.71A.91.91,0,0,1,19.66,17.22ZM12,11.75A4.75,4.75,0,1,0,7.25,7,4.75,4.75,0,0,0,12,11.75Zm0-8A3.25,3.25,0,1,1,8.75,7,3.26,3.26,0,0,1,12,3.75Zm.5,3.92a.18.18,0,0,0-.17-.17h-.66a1.16,1.16,0,0,1-.17-2.3V5a.5.5,0,0,1,1,0v.17H13a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5H11.67a.17.17,0,0,0-.17.16.18.18,0,0,0,.17.17h.66a1.16,1.16,0,0,1,.17,2.3V9a.5.5,0,0,1-1,0V8.83H11a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h1.33A.17.17,0,0,0,12.5,7.67Z'
        ></path>
      </g>
    </svg>
  )
}

export default Loans
