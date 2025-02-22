'use client'
import React from 'react'
import { Box } from '@/ui/atoms'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import { BannerOffers, Cards } from '../components/consolidate'
import PlayToWin from '../components/consolidate/playToWinCard'

const ConsolidadaPage = () => {
  return (
    <LayoutAuthenticationPage>
      <Box className='w-full flex justify-center flex-col gap-4 self-center'>
        <BannerOffers />
        <Cards />
        <PlayToWin />
      </Box>
    </LayoutAuthenticationPage>
  )
}

export default ConsolidadaPage
