import React, { useMemo } from 'react'
import { z } from 'zod'
import { useI18Text } from '@/application/hooks'
import { Text } from '@/ui/atoms'
import FormState from '@/ui/atoms/formState'
import { FormField } from '@/ui/molecules'
import { FORM_NEW_TC_NAME, FormNewTcI, FormNewTcProps } from './types'
import SelectableCardsGroup from '../selectableCardsGroup'

const FormNewTC = ({ goToStep, formID }: FormNewTcProps) => {
  const t = useI18Text('tarjetas')

  const formTransferSchema = useMemo(
    () =>
      z.object({
        brand: z.string().min(1, t('requiredSelectedTc')),
      }),
    [t]
  )

  const handleSubmit = (val: FormNewTcI) => {
    console.log(val)
    goToStep(1)
  }

  return (
    <FormState
      onSubmit={handleSubmit}
      schema={formTransferSchema}
      defaultValues={{ brand: '' }}
      id={formID}
    >
      <Text textType='font_20_24_fw_bold_fm_rob_text-100'>
        {t('yourFirstCardTc')}
      </Text>
      <FormField<FormNewTcI>
        name={FORM_NEW_TC_NAME.brand}
        label={t('selectedCardLabel')}
        component={SelectableCardsGroup}
        isRequired
      />
      <Text
        textType='font_12_14_fw_bold_fm_rob'
        className='text-gray-400 text-center'
      >
        {t('solicLast')}
      </Text>
    </FormState>
  )
}

export default FormNewTC
