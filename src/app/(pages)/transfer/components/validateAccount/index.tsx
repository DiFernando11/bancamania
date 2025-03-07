import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { useI18Text, useVerifyAccount } from '@/application/hooks'
import { Box, Button } from '@/ui/atoms'
import { FormField, InputText } from '@/ui/molecules'
import { AlertErrorService, PairSkeletonGroup } from '@/ui/organisms'
import DataAccount from '../dataAccount'
import { FORM_TRANSFER_NAME, FormTransferI } from '../formTransfer/types'

const ValidateAccount = () => {
  const { handleActionService, data, isLoading, isError, error, reset } =
    useVerifyAccount()
  const t = useI18Text('transfer')
  const tCommon = useI18Text()
  const {
    setFocus,
    formState: { errors },
    getValues,
    setValue,
    watch,
  } = useFormContext<FormTransferI>()
  const NUMBER_SUGESTION = '1000000003'

  const handleValidateAccount = () => {
    const accountId = getValues(FORM_TRANSFER_NAME.accountId)
    if (data) {
      setValue(FORM_TRANSFER_NAME.accountId, '')

      return reset()
    }

    if (accountId?.length < 10) {
      return setFocus(FORM_TRANSFER_NAME.accountId)
    }
    handleActionService({ accountId })
  }

  useEffect(() => {
    const subscription = watch((_, { name }) => {
      if (name === FORM_TRANSFER_NAME.accountId && error) {
        reset()
      }
    })

    return () => subscription.unsubscribe()
  }, [watch, error, reset])

  return (
    <>
      <Box className='flex gap-4 w-full justify-center flex-col sm:flex-row'>
        <FormField<FormTransferI>
          label={t('numberAccount')}
          name={FORM_TRANSFER_NAME.accountId}
          component={InputText}
          placeholder={t('numberAccountPH')}
          maxLength={10}
          className='w-full'
          disabled={Boolean(data)}
          autoComplete={'off'}
          autoSuggestion
          suggestionPlaceholder={tCommon('suggestion', {
            sug: NUMBER_SUGESTION,
          })}
          suggestionValue={NUMBER_SUGESTION}
        />
        <Button
          type='button'
          className='!w-40 min-w-40 h-12 !p-2 ml-auto sm:mt-7 sm:h-14'
          onClick={handleValidateAccount}
          disabled={!!errors.accountId}
        >
          {data ? tCommon('clean') : t('validateAccount')}
        </Button>
      </Box>
      {isLoading && <PairSkeletonGroup />}
      <DataAccount data={data} />
      <AlertErrorService error={error} isError={isError} />
    </>
  )
}

export default ValidateAccount
