import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { useVerifyAccount } from '@/application/hooks'
import { Box, Button } from '@/ui/atoms'
import { FormField, InputText } from '@/ui/molecules'
import { AlertErrorService, PairSkeletonGroup } from '@/ui/organisms'
import DataAccount from '../dataAccount'
import { FormTransferI } from '../formTransfer/types'

const ValidateAccount = () => {
  const { handleActionService, data, isLoading, error, reset } =
    useVerifyAccount()

  const {
    setFocus,
    formState: { errors },
    getValues,
    watch,
  } = useFormContext<FormTransferI>()

  const handleValidateAccount = () => {
    const accountId = getValues('accountId')

    if (accountId?.length < 10) {
      setFocus('accountId')

      return
    }
    handleActionService({
      accountId,
    })
  }

  useEffect(() => {
    const subscription = watch((_, { name }) => {
      if (name === 'accountId' && error) {
        reset()
      }
    })

    return () => subscription.unsubscribe()
  }, [watch, error, reset])

  return (
    <>
      <Box className='flex gap-4 w-full justify-center flex-col sm:flex-row'>
        <FormField<FormTransferI>
          label={'Numero de cuenta'}
          name='accountId'
          component={InputText}
          placeholder='Escribe la cuenta del usuario'
          maxLength={10}
          className='w-full'
          disabled={Boolean(data)}
        />
        <Button
          type='button'
          className='!w-40 min-w-40 h-12 !p-2 ml-auto sm:mt-7'
          onClick={handleValidateAccount}
          disabled={!!errors.accountId}
        >
          {data ? 'Limpiar' : 'Validar cuenta'}
        </Button>
      </Box>
      {isLoading && <PairSkeletonGroup />}
      {data && <DataAccount data={data} />}
      <AlertErrorService error={error} />
    </>
  )
}

export default ValidateAccount
