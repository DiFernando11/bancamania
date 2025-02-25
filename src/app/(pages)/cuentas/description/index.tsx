'use client'
import React, { useState } from 'react'
import { useGetAccount, useI18Text } from '@/application/hooks'
import { Box, Text } from '@/ui/atoms'
import { OpenCloseEye } from '@/ui/molecules'
import { Balance, SkeletonLoader } from '@/ui/organisms'

const Description = () => {
  const t = useI18Text('account')
  const [showBalance, setShowBalance] = useState<boolean>(true)
  const { data, isLoading } = useGetAccount()

  return (
    <Box className='flex flex-col gap-4'>
      <Box className='flex gap-5 items-center'>
        <Balance
          classSkeleton='flex items-center'
          isLoading={isLoading}
          textType='font_24_30_fw_bold_fm_rob'
          classIcon='w-6 h-6 sm:w-7 sm:h-7'
          balance={data?.balance}
          isShow={showBalance}
          width='w-24 sm:w-28'
          height='h-6 sm:h-8'
        />
        <OpenCloseEye
          setIsShow={setShowBalance}
          isShow={showBalance}
          iconClass={'w-6 h-6 sm:w-7 sm:h-7'}
        />
      </Box>
      <Box className='flex flex-col justify-end mb-4'>
        <Text className='text-end' textType='font_16_18_fw_bold_fm_rob'>
          {t('transactional')}
        </Text>
        <SkeletonLoader
          className='flex justify-end'
          isLoading={isLoading}
          height='h-4 sm:h-5'
          width='w-32 sm:w-36'
        >
          <Text textType='font_16_18_fw_bold_fm_rob' className='text-end'>
            {t('numberAccount', { number: data?.accountNumber })}
          </Text>
        </SkeletonLoader>
      </Box>
    </Box>
  )
}

export default Description
