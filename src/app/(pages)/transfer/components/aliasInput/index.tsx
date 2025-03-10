'use client'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import { VerifyAccountResponse } from '@/shared'
import { ScrollIntoView } from '@/ui/atoms'
import { AnimationVisible, FormField, InputText } from '@/ui/molecules'
import { FORM_TRANSFER_NAME, FormTransferI } from '../formTransfer/types'

const AliasInput = ({
  isVisible,
  data,
}: {
  isVisible: boolean
  data?: VerifyAccountResponse
}) => {
  const tCommon = useI18Text()
  const t = useI18Text('transfer')

  return (
    <ScrollIntoView isVisible={isVisible}>
      <AnimationVisible isVisible={isVisible}>
        <FormField<FormTransferI>
          label={t('alias')}
          isRequired
          name={FORM_TRANSFER_NAME.alias}
          component={InputText}
          placeholder={t('aliasPh')}
          className='w-full'
          autoComplete={'off'}
          autoSuggestion
          suggestionPlaceholder={tCommon('suggestion', {
            sug: data?.owner,
          })}
          suggestionValue={data?.owner}
        />
      </AnimationVisible>
    </ScrollIntoView>
  )
}

export default AliasInput
