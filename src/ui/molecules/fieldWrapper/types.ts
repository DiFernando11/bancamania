export interface FormFieldProps {
  name: string
  label: string
  type: string
  component: React.ElementType // Componente personalizado
  placeholder?: string
  [key: string]: unknown // Props adicionales
}
