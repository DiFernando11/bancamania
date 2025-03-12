import { InputHTMLAttributes } from 'react'

export interface ToggleProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'checked' | 'onChange' | 'value'
  > {
  value: boolean
  onChange: (checked: boolean) => void
  width?: string
  height?: string
}
