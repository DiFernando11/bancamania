export interface ButtonFormSimpleProps {
  primaryOnClick: () => void
  formId?: string
  secondaryText?: string
  primaryText?: string
  secondaryOnClick?: () => void
  disablePrimary?: boolean
  disableSecondary?: boolean
}
