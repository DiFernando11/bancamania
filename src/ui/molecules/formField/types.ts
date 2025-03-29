import { InputHTMLAttributes, JSXElementConstructor } from 'react'
import { FieldValues, Path } from 'react-hook-form'

export type FormFieldProps<
  T extends FieldValues,
  P extends object = Record<string, unknown>, // ✅ Evita conflicto con eslint y es más semántico que `never`
> = {
  name: Path<T>
  component: JSXElementConstructor<P>
  label?: string
  placeholder?: string
  classNameForm?: string
  autoSuggestion?: boolean
  suggestionPlaceholder?: string
  suggestionValue?: string
  classNameTextError?: string
  isRequired?: boolean
  isError?: boolean
  labelClass?: string
} & InputHTMLAttributes<HTMLInputElement> &
  P
