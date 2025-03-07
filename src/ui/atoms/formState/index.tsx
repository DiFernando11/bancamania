'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm, FieldValues } from 'react-hook-form'
import { FormStateProps } from './types'

const FormState = <T extends FieldValues>({
  defaultValues,
  schema,
  mode = 'onTouched',
  id,
  onSubmit,
  children,
}: FormStateProps<T>) => {
  const methods = useForm<T>({
    defaultValues,
    mode,
    reValidateMode: 'onChange',
    resolver: schema ? zodResolver(schema) : undefined,
  })

  return (
    <FormProvider {...methods}>
      <form
        id={id}
        onSubmit={methods.handleSubmit(onSubmit)}
        className='space-y-4'
      >
        {children}
      </form>
    </FormProvider>
  )
}

export default FormState
