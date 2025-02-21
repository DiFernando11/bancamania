const Roulette: React.FC<React.SVGProps<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 256 256'
      id='PokerChip'
      className={className}
    >
      <rect width='256' height='256' fill='none'></rect>
      <circle
        cx='128'
        cy='128'
        r='96'
        fill='none'
        stroke='#14ce81'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='16'
        className='colorStroke000000 svgStroke'
      ></circle>
      <circle
        cx='128'
        cy='128'
        r='56'
        fill='none'
        stroke='#14ce81'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='16'
        className='colorStroke000000 svgStroke'
      ></circle>
      <line
        x1='128'
        x2='128'
        y1='72'
        y2='32'
        fill='none'
        stroke='#14ce81'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='16'
        className='colorStroke000000 svgStroke'
      ></line>
      <line
        x1='88.402'
        x2='60.118'
        y1='88.402'
        y2='60.118'
        fill='none'
        stroke='#14ce81'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='16'
        className='colorStroke000000 svgStroke'
      ></line>
      <line
        x1='72'
        x2='32'
        y1='128'
        y2='128'
        fill='none'
        stroke='#14ce81'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='16'
        className='colorStroke000000 svgStroke'
      ></line>
      <line
        x1='88.402'
        x2='60.118'
        y1='167.598'
        y2='195.882'
        fill='none'
        stroke='#14ce81'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='16'
        className='colorStroke000000 svgStroke'
      ></line>
      <line
        x1='128'
        x2='128'
        y1='184'
        y2='224'
        fill='none'
        stroke='#14ce81'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='16'
        className='colorStroke000000 svgStroke'
      ></line>
      <line
        x1='167.598'
        x2='195.882'
        y1='167.598'
        y2='195.882'
        fill='none'
        stroke='#14ce81'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='16'
        className='colorStroke000000 svgStroke'
      ></line>
      <line
        x1='184'
        x2='224'
        y1='128'
        y2='128'
        fill='none'
        stroke='#14ce81'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='16'
        className='colorStroke000000 svgStroke'
      ></line>
      <line
        x1='167.598'
        x2='195.882'
        y1='88.402'
        y2='60.118'
        fill='none'
        stroke='#14ce81'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='16'
        className='colorStroke000000 svgStroke'
      ></line>
    </svg>
  )
}

export default Roulette
