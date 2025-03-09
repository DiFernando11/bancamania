'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import { clientRoutes } from '@/routes/clientRoutes'
import { GetAccountResponse } from '@/shared'
import { Box, Icon, Text } from '@/ui/atoms'
import { Balance, SkeletonLoader } from '@/ui/organisms'

const DataOrigin = ({
  data,
  isLoading,
}: {
  data?: GetAccountResponse
  isLoading: boolean
}) => {
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
        <SkeletonLoader isLoading={isLoading} classNameSkeleton='w-28 h-4'>
          <Text className='break-all'>
            {t('numberAccount', { number: data?.accountNumber })}
          </Text>
        </SkeletonLoader>
      </Box>
      <Box className='flex items-center gap-4'>
        <Box className='flex flex-col gap-2'>
          <Balance
            isShow
            classContainer='self-end'
            classIcon='w-6 h-6'
            isLoading={isLoading}
            textType='font_24_fw_bold_fm_rob'
            classSkeleton='w-20 h-6 self-end'
            balance={data?.balance}
            classText='!leading-4'
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
