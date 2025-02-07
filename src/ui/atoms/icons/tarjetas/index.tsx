const Tarjetas: React.FC<React.SVGProps<SVGSVGElement>> = ({
  width = 60,
  height = 60,
  ...props
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 48 48'
      width={width}
      height={height}
      {...props}
    >
      <rect width='42' height='32' x='3' y='10' fill='#14ce81' rx='5'></rect>
      <path
        fill='#232323'
        d='M33 36h-9a1 1 0 0 1 0-2h9a1 1 0 0 1 0 2zm-6-4h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0
        2zm6 0h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2z'
      ></path>
      <rect width='12' height='8' x='8' y='29' fill='#24ffa4' rx='2'></rect>
      <path fill='#f4f4f4' d='M3 17h42v8H3z'></path>
      <path
        fill='#232323'
        d='M40 42H8a5.006 5.006 0 0 1-5-5V15a5.006 5.006 0 0 1 5-5h32a5.006 5.006 0 0 1 5
        5v22a5.006 5.006 0 0 1-5 5ZM8 12a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h32a3 3 0 0 0
        3-3V15a3 3 0 0 0-3-3Z'
      ></path>
      <path
        fill='#232323'
        d='M18 37h-8a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2
        2zm-8-6v4h8v-4zm34-6H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h32a1 1 0 0 1 0
        2H5v4h38v-4h-3a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z'
      ></path>
    </svg>
  )
}

export default Tarjetas
