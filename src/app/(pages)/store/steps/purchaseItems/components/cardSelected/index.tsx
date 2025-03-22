'use client'
import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import ModalYourCards from '@/app/components/modalYourCards'
import TypeCardSelected from '@/app/components/typeCardSelected'
import {
  useGetCardDebit,
  useGetDataByKey,
  useI18Text,
} from '@/application/hooks'
import { GetCardCreditResponse } from '@/shared'
import { useModal } from '@/shared/hooks'
import { GET_CARD_CREDIT } from '@/shared/utils/constantsQuery'
import { Box, Text } from '@/ui/atoms'
import { AlertErrorService, TextError } from '@/ui/organisms'
import { FORM_PURCHASE_NAME, FormPurchaseI } from '../formPurchase/types'

const CardSelected = () => {
  const t = useI18Text('store')
  const {
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useFormContext<FormPurchaseI>()
  const { openModal, closeModal } = useModal()
  const idCard = watch(FORM_PURCHASE_NAME.idCard)
  const { data: cardDebit, isLoading, isError } = useGetCardDebit()
  const cardCredit = useGetDataByKey<GetCardCreditResponse>([GET_CARD_CREDIT])

  const handleValue = (id?: string) => {
    setValue(FORM_PURCHASE_NAME.idCard, id ?? '')
    closeModal()
  }

  useEffect(() => {
    if (cardDebit?.id) {
      reset({ idCard: cardDebit.id })
    }
  }, [cardDebit?.id, reset])

  return (
    <Box className='flex flex-col justify-end gap-4'>
      <AlertErrorService
        isError={isError}
        error={{ message: t('errorGetCardPayment') }}
      />
      {!isError && (
        <TypeCardSelected
          isLoading={isLoading}
          cardCredit={cardCredit}
          cardDebit={cardDebit}
          id={idCard}
          onClick={() => openModal(<ModalYourCards onClick={handleValue} />)}
        />
      )}
      <TextError
        id={FORM_PURCHASE_NAME.idCard}
        error={errors.idCard}
        isValidate={Boolean(errors.idCard)}
      />
      <Text
        onClick={() => openModal(<ModalYourCards onClick={handleValue} />)}
        className='text-end cursor-pointer'
        textType='font_18_fw_bold_fm_rob_text-100'
      >
        {t('changePay')}
      </Text>
    </Box>
  )
}

export default CardSelected
