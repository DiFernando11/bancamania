/* eslint max-len: ["off"] */
import React from 'react'

const MasterCard: React.FC<React.SVGProps<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      className={className}
      id='mastercard'
    >
      <path
        fill='#EE4D4D'
        d='M8 5.25C4.27208 5.25 1.25 8.27208 1.25 12C1.25 15.7279 4.27208 18.75 8 18.75C11.7279 18.75 14.75 15.7279 14.75 12C14.75 8.27208 11.7279 5.25 8 5.25Z'
        clipRule='evenodd'
      ></path>
      <path
        fill='#FFC44D'
        d='M16 5.25C12.2721 5.25 9.25 8.27208 9.25 12C9.25 15.7279 12.2721 18.75 16 18.75C19.7279 18.75 22.75 15.7279 22.75 12C22.75 8.27208 19.7279 5.25 16 5.25Z'
        clipRule='evenodd'
      ></path>
      <path
        fill='#FF884D'
        d='M12 6.56232C10.3321 7.7913 9.25 9.76929 9.25 12C9.25 14.2307 10.3321 16.2087 12 17.4377C13.6679 16.2087 14.75 14.2307 14.75 12C14.75 9.76929 13.6679 7.7913 12 6.56232Z'
        clipRule='evenodd'
      ></path>
    </svg>
  )
}

export default MasterCard
