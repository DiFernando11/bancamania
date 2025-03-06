const InputText = ({
  value,
  onChange,
  onBlur,
  placeholder,
}: {
  value: string
  onChange: (val: string) => void
  onBlur: () => void
  placeholder?: string
}) => {
  return (
    <input
      className='border border-gray-300 px-3 py-2 text-black
      rounded focus:ring-2 focus:ring-blue-500 focus:outline-none'
      value={value}
      onChange={e => onChange(e.target.value)}
      onBlur={onBlur}
      placeholder={placeholder}
    />
  )
}

export default InputText
