'use client'
import React from 'react'
import ButtonActionSimple from '@/app/components/buttonActionSimple'
import { useGetAccount, useI18Text } from '@/application/hooks'
import { Box } from '@/ui/atoms'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import Actions from './components/actions'
import CardAsociate from './components/cardAsociate'
import Description from './components/description'
import { menuContextual } from './shared/menuContextual'

const CuentasPage = () => {
  const t = useI18Text()
  const { data, isLoading } = useGetAccount()

  return (
    <LayoutAuthenticationPage
      i18nTitle={'account'}
      footerBox={
        <ButtonActionSimple
          primaryOnClick={() => console.log('hola')}
          primaryText={t('share')}
        />
      }
      contextualMenu={menuContextual}
    >
      <Box className='flex flex-col gap-4'>
        <Description isLoading={isLoading} data={data} />
        <Actions accountId={data?.id} isLoading={isLoading} />
        <CardAsociate />
        <CardAsociate />
        <CardAsociate />
      </Box>
    </LayoutAuthenticationPage>
  )
}

export default CuentasPage
