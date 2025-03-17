export interface ButtonFormSimpleProps {
  primaryOnClick?: (...args: never[]) => void
  formId?: string
  secondaryText?: string
  primaryText?: string
  secondaryOnClick?: (...args: never[]) => void
  disablePrimary?: boolean
  disableSecondary?: boolean
  isLoading?: boolean
  isError?: boolean
}
