import { ElementType, InputHTMLAttributes } from 'react'
import { FieldValues, Path } from 'react-hook-form'

export interface FormFieldProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>
  component: ElementType
  label?: string
  placeholder?: string
  classNameForm?: string
  autoSuggestion?: boolean
  suggestionPlaceholder?: string
  suggestionValue?: string
}
