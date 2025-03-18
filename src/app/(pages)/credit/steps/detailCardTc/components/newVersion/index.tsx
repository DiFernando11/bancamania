import React from 'react'
import CreditIconName from '@/app/(pages)/credit/shared/creditIconName'
import { useGetOffertsCredit, useI18Text } from '@/application/hooks'
import { Box, Button, Text } from '@/ui/atoms'
import { Card, PairText } from '@/ui/molecules'
import { NewVersionProps } from './types'

const NewVersion = ({ stepData }: NewVersionProps) => {
  const { data } = useGetOffertsCredit()
  const t = useI18Text('tarjetas')
  const tCommon = useI18Text()

  const newVersion = data?.increaseVersion?.find(
    card => card.id === stepData.id
  )

  if (!newVersion) return null

  return (
    <>
      <Text textType='font_20_24_fw_bold_fm_rob_text-100'>
        {t('updateVersion')}
      </Text>
      <Card className='flex flex-col sm:flex-row gap-4'>
        <CreditIconName marca={newVersion.marca}>
          <Box className='flex flex-col justify-between w-full items-center sm:flex-row'>
            <Box className='w-full'>
              <Text textType='font_16_18_fw_bold_fm_rob'>
                {newVersion.version}
              </Text>
              <PairText
                className='!justify-start !gap-2'
                textTypeKey='font_16_18_fw_bold_fm_rob'
                textTypeValue='font_16_18_fm_rob'
                textKey={t('newLimit')}
                textValue={newVersion.newLimit}
              />
            </Box>
          </Box>
        </CreditIconName>
        <Button className='!w-40 ml-auto !p-2 sm:!p-4'>
          {tCommon('request')}
        </Button>
      </Card>
    </>
  )
}

export default NewVersion
