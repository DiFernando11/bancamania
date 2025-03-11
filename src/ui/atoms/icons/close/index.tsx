import React from 'react'

const Close: React.FC<React.SVGProps<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='4.5 4.5 14 14'
      id='close'
      className={className}
      fill={'currentColor'}
    >
      <path
        fill={'currentColor'}
        d='M7.05 7.05a1 1 0 0 0 0 1.414L10.586 12 7.05 15.536a1 1 0 1 0 1.414
        1.414L12 13.414l3.536 3.536a1 1 0 0 0 1.414-1.414L13.414 12l3.536-3.536a1
        1 0 0 0-1.414-1.414L12 10.586 8.464 7.05a1 1 0 0 0-1.414 0Z'
      />
    </svg>
  )
}

export default Close
