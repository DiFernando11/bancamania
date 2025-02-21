'use client'
import React from 'react'
import { Box } from '@/ui/atoms'
import { BannerOffers, Cards } from '../components/consolidate'
import PlayToWin from '../components/consolidate/playToWinCard'

const ConsolidadaPage = () => {
  return (
    <main className='w-full flex flex-col h-full p-6 lg:p-0'>
      <Box className='w-full flex flex-col gap-4 max-w-content self-center'>
        <BannerOffers />
        <Cards />
        <PlayToWin />
      </Box>
    </main>
  )
}

export default ConsolidadaPage
