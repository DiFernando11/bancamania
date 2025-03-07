import React, { ComponentProps } from 'react'
import { useFormContext, Controller, FieldValues } from 'react-hook-form'
import { Box, Text } from '@/ui/atoms'
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
    <Box className={`flex flex-col gap-1 ${className}`}>
      {label && <label htmlFor={name}>{label}</label>}
      <Controller
        name={name}
        control={control}
        render={({
          field: { value, onChange, onBlur, ref },
          fieldState: { error },
        }) => (
          <>
            {Component && (
              <Component
                {...(props as ComponentProps<typeof Component>)}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                ref={ref}
                id={name}
              />
            )}
            {error && (
              <Text textType='font_14_fw_bold_fm_rob' className='text-red-500'>
                {error.message}
              </Text>
            )}
          </>
        )}
      />
    </Box>
  )
}

export default FormField
