'use client'
import React, { useMemo } from 'react'
import { z } from 'zod'
import {
  useCreateCredit,
  useI18Text,
  useRemoveQueries,
} from '@/application/hooks'
import { clientRoutes } from '@/routes/clientRoutes'
import { useGlobalLoading, useNavigation } from '@/shared/hooks'
import { replaceDynamicsRoutes } from '@/shared/utils'
import {
  GET_CARD_CREDIT,
  GET_OFFERTS_CREDIT,
} from '@/shared/utils/constantsQuery'
import { Text } from '@/ui/atoms'
import FormState from '@/ui/atoms/formState'
import { FormField } from '@/ui/molecules'
import { AlertErrorService } from '@/ui/organisms'
import { FORM_NEW_TC_NAME, FormNewTcI, FormNewTcProps } from './types'
import SelectableCardsGroup from '../selectableCardsGroup'

const FormNewTC = ({ formID, newCards }: FormNewTcProps) => {
  const t = useI18Text('tarjetas')
  const router = useNavigation()
  const { handleActionService, isLoading, isError, error } = useCreateCredit()
  useGlobalLoading([isLoading])
  const { invalidate } = useRemoveQueries()

  const isUniqueOption = newCards && newCards?.length === 1

  const formTransferSchema = useMemo(
    () =>
      z.object({
        brand: z.string().min(1, t('requiredSelectedTc')),
      }),
    [t]
  )

  const handleSubmit = async (val: FormNewTcI) => {
    handleActionService(
      { marca: val.brand },
      {
        onSuccess: ({ receiptID }) => {
          invalidate({ queryKey: [GET_CARD_CREDIT] })
          invalidate({ queryKey: [GET_OFFERTS_CREDIT] })
          router.push(
            replaceDynamicsRoutes(clientRoutes.receiptsID.path, {
              id: receiptID,
            })
          )
        },
      }
    )
  }

  return (
    <FormState
      onSubmit={handleSubmit}
      schema={formTransferSchema}
      defaultValues={{ brand: isUniqueOption ? newCards?.[0].marca : '' }}
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
      {!isUniqueOption && (
        <Text
          textType='font_12_14_fw_bold_fm_rob'
          className='text-gray-400 text-center'
        >
          {t('solicLast')}
        </Text>
      )}
      <AlertErrorService isError={isError} error={error} isScroll />
    </FormState>
  )
}

export default FormNewTC
