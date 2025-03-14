import React from 'react'
import { DataTransfer } from '@/app/(pages)/transfer/types'
import ButtonActionSimple from '@/app/components/buttonActionSimple'
import { Text } from '@/ui/atoms'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import { StepProps } from '@/ui/organisms/stepWizard/types'

const DetailCardTc = ({ goToStep }: StepProps<DataTransfer>) => {
  console.log(goToStep)

  return (
    <LayoutAuthenticationPage footerBox={<ButtonActionSimple />}>
      <Text>Segundo paso</Text>
    </LayoutAuthenticationPage>
  )
}

export default DetailCardTc
