'use client'
import React from 'react'
import ButtonActionSimple from '@/app/components/buttonActionSimple'
import { useGetAccount, useI18Text } from '@/application/hooks'
import { Box } from '@/ui/atoms'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import { CardProduct } from '@/ui/organisms'
import Actions from './actions'
import CardAsociate from './cardAsociate'
import Description from './description'

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
