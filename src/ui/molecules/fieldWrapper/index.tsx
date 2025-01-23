import { Field, ErrorMessage, FieldProps } from 'formik'
import React from 'react'
import { FormFieldProps } from './types'

const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  component: Component,
  placeholder,
  ...props
}) => {
  return (
    <div className='flex flex-col'>
      <label htmlFor={name} className='mb-1 font-medium text-gray-700'>
        {label}
      </label>
      {/* Renderiza el componente personalizado */}
      <Field name={name}>
        {({ field }: FieldProps) => (
          <Component
            {...field} // Props de Formik
            id={name}
            placeholder={placeholder}
            {...props} // Props adicionales
          />
        )}
      </Field>
      <ErrorMessage
        name={name}
        component='div'
        className='text-sm text-red-500 mt-1'
      />
    </div>
  )
}

export default FormField
