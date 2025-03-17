import React from 'react'
import ButtonActionSimple from '@/app/components/buttonActionSimple'
import { Text } from '@/ui/atoms'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import { StepProps } from '@/ui/organisms/stepWizard/types'
import { DataCredit } from '../../types'

const DetailCardTc = ({ goToStep }: StepProps<DataCredit>) => {
  return (
    <LayoutAuthenticationPage footerBox={<ButtonActionSimple />}>
      <Text>Segundo paso</Text>
    </LayoutAuthenticationPage>
  )
}

export default DetailCardTc
