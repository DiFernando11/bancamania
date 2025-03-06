import React from 'react'
import { z } from 'zod'
import FormState from '@/ui/atoms/formState'
import { FormField, InputText } from '@/ui/molecules'
import { FormTransferI } from './types'

export const formTransferSchema = z.object({
  accountId: z
    .string()
    .min(1, 'El número de cuenta es obligatorio')
    .min(10, 'El número de cuenta debe tener exactamente 10 dígitos')
    .max(10, 'El número de cuenta debe tener exactamente 10 dígitos')
    .regex(
      /^\d+$/,
      'El número de cuenta solo puede contener dígitos numéricos'
    ),
})

const FormTransfer = ({ formID }: { formID: string }) => {
  const onSubmit = (val: FormTransferI) => {
    console.log(val)
  }

  return (
    <FormState
      schema={formTransferSchema}
      id={formID}
      defaultValues={{ accountId: '' }}
      onSubmit={onSubmit}
    >
      <FormField<FormTransferI>
        label={'Numero de cuenta'}
        name='accountId'
        component={InputText}
        placeholder='Escribe la cuenta del usuario'
        maxLength={10}
      />
    </FormState>
  )
}

export default FormTransfer
