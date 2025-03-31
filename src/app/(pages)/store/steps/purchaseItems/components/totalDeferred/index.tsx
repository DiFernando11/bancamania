import React from 'react'
import { useFormContext } from 'react-hook-form'
import { useI18Text } from '@/application/hooks'
import { compoundInterest, formatMoney } from '@/shared/utils'
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

  const t = useI18Text('store')

  const { totalPurchase, installment, interestTotal, isBenefit } =
    compoundInterest({
      deferredMonth,
      interestRate: selectedCard?.interestRate,
      maxInstallmentsWithoutInterest:
        selectedCard?.maxInstallmentsWithoutInterest,
      total,
      typeCredit: selectedCard?.typeCard,
    })

  return (
    <AnimationVisible isVisible={isVisible}>
      <BitcoinSymbol
        classIcon='w-5 h-5'
        balance={`Total: ${formatMoney({ value: totalPurchase })}`}
        textType='font_20_fw_bold_fm_rob'
      />
      <AnimationVisible
        isVisible={Boolean(deferredMonth > 1 && isCredit && isBenefit)}
      >
        <Text textType='font_18_fm_rob'>
          {t('benefitApplicate', {
            month: selectedCard?.maxInstallmentsWithoutInterest,
          })}
        </Text>
        <BitcoinSymbol
          classIcon='w-5 h-5'
          balance={t('payMonth', {
            balance: installment,
            card: selectedCard?.brand,
            month: deferredMonth,
          })}
          textType='font_18_fw_bold_fm_rob'
        />
      </AnimationVisible>
      <AnimationVisible
        isVisible={Boolean(deferredMonth > 1 && isCredit && !isBenefit)}
      >
        <BitcoinSymbol
          classIcon='w-5 h-5'
          balance={t('payMonth', {
            balance: installment,
            card: selectedCard?.brand,
            month: deferredMonth,
          })}
          textType='font_18_fw_bold_fm_rob'
        />
        <BitcoinSymbol
          classIcon='w-5 h-5'
          balance={t('totalWithoutInterest', { total: total.toFixed(2) })}
          textType='font_18_fm_rob'
        />
        <BitcoinSymbol
          classIcon='w-5 h-5'
          balance={t('interestApplied', {
            interest: interestTotal,
          })}
          textType='font_18_fm_rob'
        />
      </AnimationVisible>
    </AnimationVisible>
  )
}

export default TotalDeferred
