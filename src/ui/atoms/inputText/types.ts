import { InputHTMLAttributes } from 'react'

export interface InputTextProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string
  onChange: (val: string) => void
}
