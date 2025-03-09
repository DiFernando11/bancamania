'use client'
import classNames from 'classnames'
import React, { useMemo } from 'react'
import { z } from 'zod'
import { useI18Text } from '@/application/hooks'
import { formatToMoney } from '@/shared/utils'
import { Box } from '@/ui/atoms'
import FormState from '@/ui/atoms/formState'
import { FormField, InputMoney } from '@/ui/molecules'
import { FormConfirmTransferI, FormConfirmTransferProps } from './types'
import DataDestination from '../dataDestination'
import DataOrigin from '../dataOrigin'
import Motive from '../motive'

const FormConfirmTransfer = ({
  formID,
  stepData,
}: FormConfirmTransferProps) => {
  const t = useI18Text('transfer')
  const formTransferSchema = useMemo(
    () =>
      z.object({
        amount: z.number().gt(0, t('errors.amount_greater_zero')),
        destinationAccountId: z.string(),
        motive: z.string(),
        originAccountId: z.string(),
      }),
    [t]
  )

  const handleSubmit = (val: FormConfirmTransferI) => {
    console.log('haciendo submit')
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
      <Box className='flex flex-col justify-center w-full gap-4'>
        <DataDestination stepData={stepData} />
        <FormField<FormConfirmTransferI>
          name='amount'
          className={classNames(
            'w-full self-center !max-w-[16rem] !text-4xl text-center',
            'sm:!max-w-[20rem] sm:!text-5xl'
          )}
          classNameTextError='text-center'
          component={InputMoney}
          placeholder='0.00'
          maxLength={10}
        />
        <DataOrigin />
        <Motive />
      </Box>
    </FormState>
  )
}

export default FormConfirmTransfer
