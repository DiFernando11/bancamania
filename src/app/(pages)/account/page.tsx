'use client'
import React from 'react'
import ButtonActionSimple from '@/app/components/buttonActionSimple'
import ModalShare from '@/app/components/modalShare'
import { useGetAccount, useI18Text } from '@/application/hooks'
import { useModal, useShareText } from '@/shared/hooks'
import { Box } from '@/ui/atoms'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import Actions from './components/actions'
import CardAsociate from './components/cardAsociate'
import Description from './components/description'
import ModalShareAccount from './components/modalShare'
import { menuContextual } from './shared/menuContextual'

const CuentasPage = () => {
  const t = useI18Text('account')
  const tCommon = useI18Text()
  const { data, isLoading } = useGetAccount()
  const { openModal } = useModal()

  return (
    <LayoutAuthenticationPage
      i18nTitle={t('title')}
      footerBox={
        <ButtonActionSimple
          disablePrimary={isLoading}
          primaryOnClick={() => openModal(<ModalShareAccount data={data} />)}
          primaryText={tCommon('share')}
        />
      }
      contextualMenu={menuContextual}
    >
      <Box className='flex flex-col gap-4'>
        <Description isLoading={isLoading} data={data} />
        <Actions accountId={data?.id} isLoading={isLoading} />
        <CardAsociate />
      </Box>
    </LayoutAuthenticationPage>
  )
}

export default CuentasPage
