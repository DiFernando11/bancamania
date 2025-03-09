'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useGetAccount, useI18Text } from '@/application/hooks'
import { clientRoutes } from '@/routes/clientRoutes'
import { Box, Icon, Text } from '@/ui/atoms'
import { BitcoinSymbol } from '@/ui/molecules'

const DataOrigin = () => {
  const { data } = useGetAccount()
  const router = useRouter()
  const t = useI18Text('account')
  const tTransfer = useI18Text('transfer')

  return (
    <Box
      className='cursor-pointer border border-primary-100 p-4 flex justify-between gap-4'
      onClick={() => router.push(clientRoutes.account.path)}
    >
      <Box className='space-y-2'>
        <Text className='break-all'>{tTransfer('from')}</Text>
        <Text className='break-all'>
          {t('numberAccount', { number: data?.accountNumber })}
        </Text>
      </Box>
      <Box className='flex items-center gap-4'>
        <Box className='flex flex-col gap-2'>
          <BitcoinSymbol
            classContainer='self-end'
            textType='font_24_fw_bold_fm_rob'
            classText='!leading-4'
            classIcon='w-6 h-6'
            text={data?.balance}
          />
          <Text className='text-end hidden sm:block'>
            {tTransfer('availableBalance')}
          </Text>
        </Box>
        <Icon name='Arrown' className='-rotate-90 w-5 h-5' />
      </Box>
    </Box>
  )
}

export default DataOrigin
