'use client'
import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import ModalYourCards from '@/app/components/modalYourCards'
import TypeCardSelected from '@/app/components/typeCardSelected'
import { useI18Text } from '@/application/hooks'
import { TYPE_CARD } from '@/shared'
import { useModal } from '@/shared/hooks'
import { Box, Text } from '@/ui/atoms'
import { AlertErrorService, TextError } from '@/ui/organisms'
import DeferredPayment from '../deferredPayment'
import { CardSelectedProps } from './types'
import {
  FORM_PURCHASE_NAME,
  FormPurchaseI,
  METHOD_PAY,
  PurchaseSelectedCard,
} from '../formPurchase/types'

const CardSelected = ({ cardDebit, isLoading, isError }: CardSelectedProps) => {
  const t = useI18Text('store')
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<FormPurchaseI>()
  const { openModal, closeModal } = useModal()
  const methodPay = watch(FORM_PURCHASE_NAME.methodPay)
  const selectedCard = watch(FORM_PURCHASE_NAME.selectedCard)
  const isBitcoinMethod = methodPay === METHOD_PAY.BITCOIN
  const isCredit = TYPE_CARD.CREDIT === selectedCard?.typeCard

  const handleValue = (selectedCard: PurchaseSelectedCard) => {
    setValue(FORM_PURCHASE_NAME.selectedCard, {
      account: selectedCard.account,
      brand: selectedCard.brand,
      cardNumber: selectedCard.cardNumber,
      id: selectedCard.id,
      interestRate: selectedCard.interestRate,
      maxInstallmentsWithoutInterest:
        selectedCard.maxInstallmentsWithoutInterest,
      miles: selectedCard.miles,
      quota: selectedCard.quota,
      typeCard: selectedCard.typeCard,
      version: selectedCard.version,
    })
    setValue(FORM_PURCHASE_NAME.deferredMonth, 1)
    closeModal()
  }

  useEffect(() => {
    if (cardDebit?.id) {
      setValue(FORM_PURCHASE_NAME.selectedCard, {
        account: cardDebit.account,
        cardNumber: cardDebit.cardNumber,
        id: cardDebit.id,
        typeCard: TYPE_CARD.DEBIT,
      })
    }
  }, [cardDebit, setValue])

  return (
    <Box className='flex flex-col justify-end gap-4'>
      <AlertErrorService
        isError={isError}
        error={{ message: t('errorGetCardPayment') }}
      />
      {!isError && (
        <TypeCardSelected
          isBitcoinMethod={isBitcoinMethod}
          selectedCard={selectedCard}
          isLoading={isLoading}
          onClick={() => openModal(<ModalYourCards onClick={handleValue} />)}
        />
      )}
      <TextError
        id={FORM_PURCHASE_NAME.selectedCard}
        error={errors.selectedCard?.id}
        isValidate={Boolean(errors.selectedCard)}
      />
      <Text
        onClick={() => openModal(<ModalYourCards onClick={handleValue} />)}
        className='text-end cursor-pointer'
        textType='font_18_fw_bold_fm_rob_text-100'
      >
        {t('changePay')}
      </Text>
      <DeferredPayment isCredit={Boolean(isCredit && isBitcoinMethod)} />
    </Box>
  )
}

export default CardSelected
