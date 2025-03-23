import { InputHTMLAttributes } from 'react'

export interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string
  autoSuggestion?: boolean
  suggestionPlaceholder?: string
  suggestionValue?: string
}
