'use client'
import classNames from 'classnames'
import React from 'react'
import { useFormContext, Controller, FieldValues } from 'react-hook-form'
import { useI18Text } from '@/application/hooks'
import { Box, Text } from '@/ui/atoms'
import { TextError } from '@/ui/organisms'
import { FormFieldProps } from './types'

const FormField = <
  T extends FieldValues,
  P extends object = Record<string, unknown>,
>({
  name,
  label,
  component: Component,
  classNameForm = '',
  classNameTextError,
  isRequired = false,
  isError = true,
  onChange,
  ...props
}: FormFieldProps<T, P>) => {
  const { control } = useFormContext<T>()
  const t = useI18Text()

  return (
    <Box className={`flex flex-col gap-1 ${classNameForm}`}>
      {label && (
        <Box className='flex gap-2 items-center'>
          <label htmlFor={name}>{label}</label>
          <Text
            className={classNames({ 'text-error': isRequired })}
            textType='font_12_fm_rob'
          >
            {isRequired ? t('required') : t('optional')}
          </Text>
        </Box>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Component
              {...(props as P)}
              {...field}
              id={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                field.onChange(e)
                if (typeof onChange === 'function') {
                  onChange(e)
                }
              }}
            />
            <TextError
              className={classNameTextError}
              id={name}
              error={error}
              isValidate={Boolean(error && isError)}
            />
          </>
        )}
      />
    </Box>
  )
}

export default FormField
