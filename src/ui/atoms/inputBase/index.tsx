import classNames from 'classnames'
import { InputBaseProps } from './types'

const InputBase = ({ value, onChange, ...props }: InputBaseProps) => {
  return (
    <input
      {...props}
      className={classNames(
        'border bg-transparent border-primary-100 p-3 rounded',
        'focus:ring-2 focus:ring-accent-100 focus:border-accent-100',
        props.className
      )}
      value={value}
      onChange={onChange}
    />
  )
}

export default InputBase
