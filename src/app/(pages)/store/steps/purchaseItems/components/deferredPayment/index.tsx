import React from 'react'
import { useFormContext } from 'react-hook-form'
import { useI18Text } from '@/application/hooks'
import { TypeCardCredit } from '@/shared'
import { Text } from '@/ui/atoms'
import { AnimationVisible, ButtonGroup } from '@/ui/molecules'
import { FORM_PURCHASE_NAME, FormPurchaseI } from '../formPurchase/types'

const DeferredPayment = ({ isCredit }: { isCredit: boolean }) => {
  const t = useI18Text('store')
  const { watch, setValue } = useFormContext<FormPurchaseI>()
  const deferredMonth = watch(FORM_PURCHASE_NAME.deferredMonth)
  const selectedCard = watch(FORM_PURCHASE_NAME.selectedCard)
  const options = [
    { id: '0', label: t('singlePay') },
    { id: '3', label: t('months', { month: '03' }) },
    { id: '6', label: t('months', { month: '06' }) },
    { id: '9', label: t('months', { month: '09' }) },
    { id: '12', label: t('months', { month: '12' }) },
    { id: '18', label: t('months', { month: '18' }) },
    { id: '24', label: t('months', { month: '24' }) },
  ]

  const handleSelection = (id: string) => {
    setValue(FORM_PURCHASE_NAME.deferredMonth, id)
  }

  return (
    <AnimationVisible
      className='flex flex-col gap-4'
      isVisible={Boolean(isCredit)}
    >
      <Text textType='font_18_fw_bold_fm_rob_text-100'>{t('optionsBuy')}</Text>
      <Text textType='font_18_fm_rob'>
        {t(
          selectedCard?.marca === TypeCardCredit.VISA
            ? 'benefitVisa'
            : 'benefitMastercard'
        )}
      </Text>
      <ButtonGroup
        value={deferredMonth}
        options={options}
        onChange={handleSelection}
        className='gap-2'
        classNameButton='!p-2 w-10'
      />
    </AnimationVisible>
  )
}

export default DeferredPayment
