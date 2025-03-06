import { ComponentType, InputHTMLAttributes } from 'react'
import { FieldValues, Path } from 'react-hook-form'

export interface FormFieldProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>
  component: ComponentType<
    {
      value: T[Path<T>]
      onChange: (value: T[Path<T>]) => void
      onBlur: () => void
    } & Record<string, unknown>
  >
  label?: string
  placeholder?: string
  className?: string
}
