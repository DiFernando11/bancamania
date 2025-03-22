import React from 'react'
import { z } from 'zod'
import { useI18Text } from '@/application/hooks'
import FormState from '@/ui/atoms/formState'
import CardSelected from '../cardSelected'
import { FormPurchaseI } from './types'

const FormPurchase = ({ formID }: { formID: string }) => {
  const t = useI18Text('tarjetas')
  const handleSubmit = (datas: FormPurchaseI) => {
    console.log(datas, 'FORM_DATA')
  }

  const formPurchaseSchema = z.object({
    idCard: z.string().min(1, t('requiredCard')),
  })

  return (
    <FormState
      id={formID}
      onSubmit={handleSubmit}
      defaultValues={{ idCard: '' }}
      schema={formPurchaseSchema}
    >
      <CardSelected />
    </FormState>
  )
}

export default FormPurchase
