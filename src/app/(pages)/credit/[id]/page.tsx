'use client'
import React, { useState } from 'react'
import ButtonActionSimple from '@/app/components/buttonActionSimple'
import { useGetCardCreditID, useI18Text } from '@/application/hooks'
import { isValidUUIDv4 } from '@/shared/utils'
import { Box } from '@/ui/atoms'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import { Alert } from '@/ui/molecules'
import { AlertErrorService } from '@/ui/organisms'
import ActionsCredit from './components/actionsCredit'
import ActiveCardCredit from './components/activeCardCredit'
import DetailCredit from './components/detailCredit'
import MovementsCredit from './components/movementsCredit'
import NewVersion from './components/newVersion'

const DetailCardTc = ({ params }: { params: { id: string } }) => {
  const formID = 'FORM_DETAIL_TC'
  const t = useI18Text('tarjetas')
  const tCommon = useI18Text()
  const { data, isLoading, error, isError } = useGetCardCreditID({
    creditID: params.id,
  })
  const [isChecked, setChecked] = useState<boolean>(false)

  if (!isValidUUIDv4(params.id))
    return (
      <Box className='m-4'>
        <Alert type='error'>{tCommon('invalidId')}</Alert>
      </Box>
    )

  return (
    <LayoutAuthenticationPage
      i18nTitle={t('titleDetail')}
      footerBox={<ButtonActionSimple />}
    >
      <AlertErrorService error={error} isError={isError} />
      {!isError && (
        <>
          <DetailCredit
            formID={formID}
            data={data}
            isLoading={isLoading}
            isChecked={isChecked}
            id={params.id}
          />
          <ActiveCardCredit
            isChecked={isChecked}
            setChecked={setChecked}
            isLoadingCard={isLoading}
            status={data?.status}
            id={params.id}
          />
        </>
      )}
      <ActionsCredit />
      <NewVersion id={params.id} />
      <MovementsCredit id={params.id} isLoadingCredit={isLoading} />
    </LayoutAuthenticationPage>
  )
}

export default DetailCardTc
