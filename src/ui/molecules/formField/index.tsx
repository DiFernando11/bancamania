import React, { ComponentProps } from 'react'
import { useFormContext, Controller, FieldValues } from 'react-hook-form'
import { Box, Text } from '@/ui/atoms'
import { TextError } from '@/ui/organisms'
import { FormFieldProps } from './types'

const FormField = <T extends FieldValues>({
  name,
  label,
  component: Component,
  classNameForm = '',
  classNameTextError,
  ...props
}: FormFieldProps<T>) => {
  const { control } = useFormContext<T>()

  return (
    <Box className={`flex flex-col gap-1 ${classNameForm}`}>
      {label && <label htmlFor={name}>{label}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            {Component && (
              <Component
                {...(props as ComponentProps<typeof Component>)}
                {...field}
                id={name}
              />
            )}
            <TextError
              className={classNameTextError}
              id={name}
              error={error}
              isValidate={Boolean(error)}
            />
          </>
        )}
      />
    </Box>
  )
}

export default FormField
