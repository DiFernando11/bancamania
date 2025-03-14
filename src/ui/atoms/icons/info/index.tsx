/* eslint-disable max-len */
import React from 'react'

const Account: React.FC<React.SVGProps<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
      id='info'
      className={className}
    >
      <path
        d='M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm-2 14a2 2 0 0 1 4 0v10a2 2 0 0 1-4 0V14zm2-3.968a2 2 0 1 1 .001-4.001A2 2 0 0 1 16 10.032z'
        fill={'currentColor'}
      ></path>
    </svg>
  )
}

export default Account
