import React, { ComponentProps } from 'react'
import { useFormContext, Controller, FieldValues } from 'react-hook-form'
import { FormFieldProps } from './types'

const FormField = <T extends FieldValues>({
  name,
  label,
  component: Component,
  className = '',
  ...props
}: FormFieldProps<T>) => {
  const { control } = useFormContext<T>()

  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={name} className='mb-1 font-medium text-gray-700'>
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <>
            <Component
              {...(props as ComponentProps<typeof Component>)}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              id={name}
            />
            {error && (
              <p className='text-sm text-red-500 mt-1'>{error.message}</p>
            )}
          </>
        )}
      />
    </div>
  )
}

export default FormField
