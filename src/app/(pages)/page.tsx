'use client'
import React, { useEffect, useState } from 'react'
import AwesomeSlider from 'react-awesome-slider'
import { useGetAccount } from '@/application/hooks'
import { Box } from '@/ui/atoms'
import { CardAccount } from '@/ui/organisms'

const ConsolidadaPage = () => {
  const startupScreen = <div>HOAL COMO ESTAS</div>
  const [loading, setLoading] = useState(true)
  // const { data, isLoading } = useGetAccount()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <main className='p-4 h-full w-full'>
      <Box className='flex flex-col lg:flex-row gap-8'>
        <CardAccount
          balance={'50'}
          // balance={data?.account?.balance}
          className='min-h-[200px] max-w-[500px]'
          textAccount={'13123213'}
          // textAccount={data?.account?.accountNumber}
          isLoading={loading}
        />
        <CardAccount
          balance='50'
          className='min-h-[200px] max-w-[500px]'
          textAccount='1231323'
          isLoading={loading}
        />
      </Box>
    </main>
  )
}

export default ConsolidadaPage
