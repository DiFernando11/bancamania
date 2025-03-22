import React from 'react'
import { useFormContext } from 'react-hook-form'
import ModalYourCards from '@/app/components/modalYourCards'
import { useGetDataByKey, useI18Text } from '@/application/hooks'
import { GetCardCreditResponse, GetCardResponse } from '@/shared'
import { useModal } from '@/shared/hooks'
import { GET_CARD_CREDIT, GET_CARD_DEBIT } from '@/shared/utils/constantsQuery'
import { Box, Text } from '@/ui/atoms'
import { CardProduct } from '@/ui/organisms'
import { FORM_PURCHASE_NAME, FormPurchaseI } from '../formPurchase/types'

const CardSelected = () => {
  const t = useI18Text('store')
  const tCard = useI18Text('tarjetas')
  const { watch, setValue } = useFormContext<FormPurchaseI>()
  const { openModal, closeModal } = useModal()

  const idCard = watch(FORM_PURCHASE_NAME.idCard)
  const cardDebit = useGetDataByKey<GetCardResponse>([GET_CARD_DEBIT])
  const cardCredit = useGetDataByKey<GetCardCreditResponse>([GET_CARD_CREDIT])

  const selectedCard =
    cardDebit?.id === idCard
      ? cardDebit
      : cardCredit?.find(card => card.id === idCard)

  const handleValue = (id?: string) => {
    setValue(FORM_PURCHASE_NAME.idCard, id ?? '')
    closeModal()
  }

  return (
    <Box className='flex flex-col justify-end gap-4'>
      <CardProduct.BankingCard
        onClick={() => openModal(<ModalYourCards onClick={handleValue} />)}
        className='bg-debit !h-50 cursor-pointer'
        headerBankCard={<CardProduct.HeaderCard text={tCard('debit')} />}
        textAccount={selectedCard?.cardNumber}
        isLoading={false}
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
