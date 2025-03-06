import { DefaultValues, FieldValues, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'

export interface FormStateProps<T extends FieldValues> {
  defaultValues: DefaultValues<T>
  onSubmit: SubmitHandler<T>
  children: React.ReactNode
  id?: string
  mode?: 'onChange' | 'onBlur' | 'onSubmit' | 'all'
  schema?: z.ZodSchema<T>
}
