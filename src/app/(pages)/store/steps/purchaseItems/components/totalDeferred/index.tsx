import React from 'react'
import { useFormContext } from 'react-hook-form'
import { useI18Text } from '@/application/hooks'
import { TypeCardCredit } from '@/shared'
import { INTEREST_CARD } from '@/shared/utils'
import { Text } from '@/ui/atoms'
import { AnimationVisible, BitcoinSymbol } from '@/ui/molecules'
import { FORM_PURCHASE_NAME, FormPurchaseI } from '../formPurchase/types'

const TotalDeferred = ({
  isVisible,
  isCredit,
}: {
  isVisible: boolean
  isCredit: boolean
}) => {
  const { watch } = useFormContext<FormPurchaseI>()
  const total = watch(FORM_PURCHASE_NAME.totalBuy)
  const selectedCard = watch(FORM_PURCHASE_NAME.selectedCard)
  const deferredMonth = watch(FORM_PURCHASE_NAME.deferredMonth)
  const months = Number(deferredMonth)
  const t = useI18Text('store')

  const isMastercard = selectedCard?.brand === TypeCardCredit.MASTERCARD
  const isActiveBenefit = isMastercard && months <= 6
  const interestMonth =
    INTEREST_CARD[selectedCard?.brand ?? TypeCardCredit.VISA]

  const interestMonthTotal =
    (isMastercard && months > 6) || !isMastercard ? interestMonth * months : 0
  const interestTotal = total * interestMonthTotal
  const totalWhitInterest = total + interestTotal
  const pagoMensual = totalWhitInterest / months

  return (
    <AnimationVisible isVisible={isVisible}>
      <BitcoinSymbol
        classIcon='w-5 h-5'
        balance={`Total: ${totalWhitInterest.toFixed(2)}`}
        textType='font_20_fw_bold_fm_rob'
      />
      <AnimationVisible isVisible={months > 0 && isCredit}>
        {isActiveBenefit ? (
          <Text textType='font_18_fm_rob'>{t('benefitApplicate')}</Text>
        ) : (
          <>
            <BitcoinSymbol
              classIcon='w-5 h-5'
              balance={t('totalWithoutInterest', { total: total.toFixed(2) })}
              textType='font_18_fm_rob'
            />
            <BitcoinSymbol
              classIcon='w-5 h-5'
              balance={t('interestApplied', {
                interest: interestTotal.toFixed(2),
              })}
              textType='font_18_fm_rob'
            />
          </>
        )}
        <BitcoinSymbol
          classIcon='w-5 h-5'
          balance={t('payMonth', {
            balance: pagoMensual.toFixed(2),
            card: selectedCard?.brand,
            month: months,
          })}
          textType='font_18_fw_bold_fm_rob'
        />
      </AnimationVisible>
    </AnimationVisible>
  )
}

export default TotalDeferred
