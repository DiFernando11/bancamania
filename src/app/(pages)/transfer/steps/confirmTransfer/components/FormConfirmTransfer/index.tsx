'use client'
import classNames from 'classnames'
import { useRouter } from 'next/navigation'
import React, { useMemo } from 'react'
import { z } from 'zod'
import {
  useGetAccount,
  useI18Text,
  useRemoveQueries,
} from '@/application/hooks'
import { useCreateTransfer } from '@/application/hooks/transfers/useCreateTransfer'
import { clientRoutes } from '@/routes/clientRoutes'
import { useGlobalLoading } from '@/shared/hooks'
import { formatToMoney, replaceDynamicsRoutes } from '@/shared/utils'
import {
  GET_ACCOUNT,
  GET_MOVEMENTS,
  GET_PREVIEW_RECEIPT,
} from '@/shared/utils/constantsQuery'
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
  const { handleActionService, isLoading: isLoadingCreate } =
    useCreateTransfer()
  const { data, isLoading } = useGetAccount()
  const { invalidate } = useRemoveQueries()
  const router = useRouter()
  useGlobalLoading([isLoadingCreate])
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
    const numberFormat = formatToMoney(val.amount)
    handleActionService(
      {
        amount: numberFormat,
        destinationAccountId: stepData.id,
        motive: val.motive,
        originAccountId: data?.id ?? '',
      },
      {
        onSuccess: val => {
          invalidate({ queryKey: [GET_ACCOUNT] })
          invalidate({ queryKey: [GET_PREVIEW_RECEIPT] })
          invalidate({ queryKey: [GET_MOVEMENTS] })
          router.push(
            replaceDynamicsRoutes(clientRoutes.receiptsID.path, {
              id: val.receiptId,
            })
          )
        },
      }
    )
  }

  return (
    <FormState
      onSubmit={handleSubmit}
      schema={formTransferSchema}
      id={formID}
      defaultValues={{
        amount: 0.0,
        destinationAccountId: '',
        motive: '',
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
        <DataOrigin data={data} isLoading={isLoading} />
        <Motive />
      </Box>
    </FormState>
  )
}

export default FormConfirmTransfer
