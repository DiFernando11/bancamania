'use client'
import React, { useMemo } from 'react'
import { z } from 'zod'
import { useI18Text } from '@/application/hooks'
import { formatToMoney } from '@/shared/utils'
import { Box } from '@/ui/atoms'
import FormState from '@/ui/atoms/formState'
import { FormField, InputMoney } from '@/ui/molecules'
import { FormConfirmTransferI } from './types'

const FormConfirmTransfer = ({ formID }: { formID: string }) => {
  const t = useI18Text('transfer')
  const formTransferSchema = useMemo(
    () =>
      z.object({
        amount: z.number().gt(0, t('errors.amount_greater_zero')),
        destinationAccountId: z.string(),
        originAccountId: z.string(),
      }),
    [t]
  )

  const handleSubmit = (val: FormConfirmTransferI) => {
    const numberFormat = formatToMoney(val.amount)
  }

  return (
    <FormState
      onSubmit={handleSubmit}
      schema={formTransferSchema}
      id={formID}
      defaultValues={{
        amount: 0.0,
        destinationAccountId: '',
        originAccountId: '',
      }}
    >
      <Box className='w-full'>
        <Box className='flex justify-center w-full'>
          <FormField<FormConfirmTransferI>
            name='amount'
            className='w-full max-w-[16rem] sm:max-w-[20rem] text-4xl sm:text-5xl text-center'
            component={InputMoney}
            placeholder='0.00'
            maxLength={10}
          />
        </Box>
      </Box>
    </FormState>
  )
}

export default FormConfirmTransfer
