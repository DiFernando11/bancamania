'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm, FieldValues, Path } from 'react-hook-form'
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

  const {
    handleSubmit,
    formState: { errors },
    setFocus,
  } = methods

  const onError = () => {
    const firstErrorKey = Object.keys(errors)[0]
    const inputExists = document.querySelector(`[name='${firstErrorKey}']`)

    if (firstErrorKey && inputExists) {
      setFocus(firstErrorKey as Path<T>)
    } else {
      document
        .getElementById(firstErrorKey)
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <FormProvider {...methods}>
      <form
        id={id}
        onSubmit={handleSubmit(onSubmit, onError)}
        className='flex flex-col gap-4'
      >
        {children}
      </form>
    </FormProvider>
  )
}

export default FormState
