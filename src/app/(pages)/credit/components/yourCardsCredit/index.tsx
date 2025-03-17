import React from 'react'
import { useGetCardsCredit, useI18Text } from '@/application/hooks'
import { TypeCardCredit } from '@/shared'
import { Box, Icon, Text } from '@/ui/atoms'
import { IconNames } from '@/ui/atoms/icons/icon/types'
import { IconText } from '@/ui/molecules'
import { AlertErrorService, SelectedOption } from '@/ui/organisms'
import { NAME_ICONS } from './constants'
import SkeletonCardsCredit from './skeleton'
import { YourCardCreditProps } from './types'
import CreditIconName from '../../shared/creditIconName'

const YourCardsCredit = ({ nextStep, updateData }: YourCardCreditProps) => {
  const { data, isLoading, error, isError } = useGetCardsCredit()
  const t = useI18Text('tarjetas')

  const handleSelectStep = (id: string) => {
    updateData({ id })
    nextStep()
  }

  return (
    <Box className='flex gap-4 flex-col'>
      <AlertErrorService isError={isError} error={error} />
      {isLoading ? (
        <SkeletonCardsCredit count={2} />
      ) : (
        data?.map(credit => (
          <SelectedOption
            key={credit.id}
            onClick={() => handleSelectStep(credit.id)}
          >
            <CreditIconName marca={credit.marca}>
              <Text className='break-all' textType='font_16_18_fw_bold_fm_rob'>
                {credit.version}
              </Text>
              <Text className='break-all'>
                {t('numberCard', { number: credit.cardNumber })}
              </Text>
            </CreditIconName>
          </SelectedOption>
        ))
      )}
    </Box>
  )
}

export default YourCardsCredit
