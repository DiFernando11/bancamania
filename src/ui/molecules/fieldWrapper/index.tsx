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
            className={
              'w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm ' +
              'focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 ' +
              'transition duration-200 placeholder-gray-400'
            }
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
