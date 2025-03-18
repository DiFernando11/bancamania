import React from 'react'
import CreditIconName from '@/app/(pages)/credit/shared/creditIconName'
import {
  useGetOffertsCredit,
  useI18Text,
  useRemoveQueries,
} from '@/application/hooks'
import { useUpgradeCredit } from '@/application/hooks/cards/useUpgradeCredit'
import { clientRoutes } from '@/routes/clientRoutes'
import { useGlobalLoading, useNavigation } from '@/shared/hooks'
import { replaceDynamicsRoutes } from '@/shared/utils'
import {
  GET_CARD_CREDIT,
  GET_CREDIT_BY_ID,
  GET_OFFERTS_CREDIT,
} from '@/shared/utils/constantsQuery'
import { Box, Button, Text } from '@/ui/atoms'
import { Card, PairText } from '@/ui/molecules'
import { AlertErrorService } from '@/ui/organisms'
import { NewVersionProps } from './types'

const NewVersion = ({ stepData }: NewVersionProps) => {
  const { data } = useGetOffertsCredit()
  const { handleActionService, error, isError, isLoading } = useUpgradeCredit()
  const { invalidate } = useRemoveQueries()
  const t = useI18Text('tarjetas')
  const tCommon = useI18Text()
  const router = useNavigation()
  useGlobalLoading([isLoading])

  const newVersion = data?.increaseVersion?.find(
    card => card.id === stepData.id
  )

  const handleRequest = () => {
    handleActionService(
      { id: newVersion?.id },
      {
        onSuccess: data => {
          invalidate({ queryKey: [GET_CARD_CREDIT] })
          invalidate({ queryKey: [GET_CREDIT_BY_ID, stepData.id] })
          invalidate({ queryKey: [GET_OFFERTS_CREDIT] })
          router.push(
            replaceDynamicsRoutes(clientRoutes.receiptsID.path, {
              id: data.receiptID,
            })
          )
        },
      }
    )
  }

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
        <Button className='!w-40 ml-auto !p-2 sm:!p-4' onClick={handleRequest}>
          {tCommon('request')}
        </Button>
      </Card>
      <AlertErrorService isError={isError} error={error} />
    </>
  )
}

export default NewVersion
