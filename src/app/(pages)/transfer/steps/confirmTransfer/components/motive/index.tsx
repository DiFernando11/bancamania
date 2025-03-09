'use client'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import { FormField, InputText } from '@/ui/molecules'
import { FormConfirmTransferI } from '../FormConfirmTransfer/types'

const Motive = () => {
  const t = useI18Text('transfer')
  const tCommon = useI18Text()
  const REASON_SUGESTION = t('reasonSugestion')

  return (
    <FormField<FormConfirmTransferI>
      label={t('reason')}
      name='motive'
      component={InputText}
      placeholder={t('reasonPh')}
      autoSuggestion
      suggestionPlaceholder={tCommon('suggestion', {
        sug: REASON_SUGESTION,
      })}
      suggestionValue={REASON_SUGESTION}
    />
  )
}

export default Motive
