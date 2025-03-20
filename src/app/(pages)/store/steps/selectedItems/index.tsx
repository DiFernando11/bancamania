'use client'
import React from 'react'
import { z } from 'zod'
import ButtonActionSimple from '@/app/components/buttonActionSimple'
import FormState from '@/ui/atoms/formState'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import { FormField } from '@/ui/molecules'
import { StepProps } from '@/ui/organisms/stepWizard/types'
import SelectableCardsGroupStore from './components/selectableGroupCards'
import { FORM_SELECTED_ITEMS_NAME, FormSelectedItems } from './types'
import { DataItemsPurchase } from '../types'

const SelectedItems = ({
  nextStep,
  updateData,
}: StepProps<DataItemsPurchase>) => {
  const formID = 'FORM_SELECTED_ITEM'

  const itemStoreSchema = z.object({
    description: z.string(),
    id: z.string(),
    image: z.string(),
    miles: z.number(),
    price: z.string(),
    title: z.string(),
  })

  const selectableCardsSchema = z.object({
    selectedCards: z
      .array(itemStoreSchema)
      .min(1, 'Debes seleccionar al menos un producto.'),
  })

  const onSubmit = (formData: FormSelectedItems) => {
    updateData({ selectedCards: formData.selectedCards })
    nextStep()
  }

  return (
    <LayoutAuthenticationPage
      footerBox={<ButtonActionSimple formId={formID} />}
    >
      <FormState
        id={formID}
        mode='onSubmit'
        reValidateMode='onSubmit'
        schema={selectableCardsSchema}
        onSubmit={onSubmit}
        defaultValues={{
          selectedCards: [],
        }}
      >
        <FormField<FormSelectedItems>
          name={FORM_SELECTED_ITEMS_NAME.selectedCards}
          component={SelectableCardsGroupStore}
          isRequired
        />
      </FormState>
    </LayoutAuthenticationPage>
  )
}

export default SelectedItems
