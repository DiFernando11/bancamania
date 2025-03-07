'use client'
import React from 'react'
import { z } from 'zod'
import FormState from '@/ui/atoms/formState'
import { FormTransferI } from './types'
import ValidateAccount from '../validateAccount'

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
  hasValidateAccount: z.literal(true, {
    errorMap: () => ({ message: 'Debes validar la cuenta para continuar' }),
  }),
})

const FormTransfer = ({ formID }: { formID: string }) => {
  const onSubmit = (val: FormTransferI) => {
    console.log(val)
  }

  return (
    <FormState
      schema={formTransferSchema}
      id={formID}
      defaultValues={{ accountId: '', hasValidateAccount: false }}
      onSubmit={onSubmit}
    >
      <ValidateAccount />
    </FormState>
  )
}

export default FormTransfer
