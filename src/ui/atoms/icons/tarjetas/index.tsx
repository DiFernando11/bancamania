const Tarjetas: React.FC<React.SVGProps<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='2 1 20 20'
      id='debit'
    >
      <path
        d='M20 4H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0
        2v2H4V6ZM4 17v-7h16v7Z'
        fill='#14ce81'
        className='color000000 svgShape'
      ></path>
      <path
        d='M15 12h3v3h-3zM10 15H7a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Z'
        fill='#14ce81'
        className='color000000 svgShape'
      ></path>
    </svg>
  )
}

export default Tarjetas
