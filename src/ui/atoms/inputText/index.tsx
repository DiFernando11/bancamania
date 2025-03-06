import { InputTextProps } from './types'

const InputText = ({ value, onChange, ...props }: InputTextProps) => {
  return (
    <input
      {...props}
      className={`border border-gray-300 px-3 py-2 text-black rounded
        focus:ring-2 focus:ring-blue-500 focus:outline-none ${props.className ?? ''}`}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  )
}

export default InputText
