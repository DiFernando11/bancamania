export interface FormFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  component: React.ElementType
  placeholder?: string
}
