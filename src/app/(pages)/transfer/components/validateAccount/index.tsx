'use client'
import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { useI18Text, useVerifyAccount } from '@/application/hooks'
import { Box, Button, Text } from '@/ui/atoms'
import { FormField, InputText } from '@/ui/molecules'
import { AlertErrorService, PairSkeletonGroup, TextError } from '@/ui/organisms'
import DataAccount from '../dataAccount'
import { FORM_TRANSFER_NAME, FormTransferI } from '../formTransfer/types'
import SaveAccount from '../saveAccount'

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
    clearErrors,
    watch,
  } = useFormContext<FormTransferI>()
  const NUMBER_SUGESTION = '1000000003'

  const handleValidateAccount = () => {
    const accountId = getValues(FORM_TRANSFER_NAME.accountId)
    if (data) {
      setValue(FORM_TRANSFER_NAME.accountId, '')
      setValue(FORM_TRANSFER_NAME.hasValidateAccount, false)
      setValue(FORM_TRANSFER_NAME.saveAccount, false)

      return reset && reset()
    }

    if (accountId?.length < 10) {
      return setFocus(FORM_TRANSFER_NAME.accountId)
    }
    handleActionService(
      { accountId },
      {
        onSuccess: () => {
          setValue(FORM_TRANSFER_NAME.hasValidateAccount, true)
          clearErrors(FORM_TRANSFER_NAME.hasValidateAccount)
        },
      }
    )
  }

  useEffect(() => {
    const subscription = watch((_, { name }) => {
      if (name === FORM_TRANSFER_NAME.accountId && error) {
        return reset && reset()
      }
    })

    return () => subscription.unsubscribe()
  }, [watch, error, reset])

  return (
    <Box className='flex flex-col gap-4'>
      <Text textType='font_18_fw_bold_fm_rob'>{t('accountInformation')}</Text>
      <Box className='flex gap-4 w-full justify-center flex-col sm:flex-row'>
        <Box className='w-full flex flex-col gap-1'>
          <FormField<FormTransferI>
            label={t('numberAccount')}
            isRequired
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
          <TextError
            id={FORM_TRANSFER_NAME.hasValidateAccount}
            error={errors.hasValidateAccount}
            isValidate={Boolean(
              !errors.accountId && errors.hasValidateAccount && !isLoading
            )}
          />
        </Box>
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
      <SaveAccount disabled={Boolean(!data)} data={data} />
    </Box>
  )
}

export default ValidateAccount
