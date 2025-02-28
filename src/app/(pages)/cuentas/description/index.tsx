'use client'
import React, { useState } from 'react'
import { useI18Text } from '@/application/hooks'
import { GetAccountResponse } from '@/shared'
import { Box, Text } from '@/ui/atoms'
import { OpenCloseEye } from '@/ui/molecules'
import { Balance, TextLoading } from '@/ui/organisms'

const Description = ({
  isLoading,
  data,
}: {
  isLoading: boolean
  data?: GetAccountResponse
}) => {
  const t = useI18Text('account')
  const [showBalance, setShowBalance] = useState<boolean>(true)

  return (
    <Box className='flex flex-col gap-4'>
      <Box className='flex w-full justify-between gap-5 items-center'>
        <Balance
          classSkeleton='flex items-center w-24 sm:w-28 h-6 sm:h-8'
          isLoading={isLoading}
          textType='font_24_30_fw_bold_fm_rob'
          classIcon='w-6 h-6 sm:w-7 sm:h-7'
          balance={data?.balance}
          isShow={showBalance}
        />
        <OpenCloseEye
          setIsShow={setShowBalance}
          isShow={showBalance}
          iconClass={'w-6 h-6 sm:w-7 sm:h-7'}
        />
      </Box>
      <Box className='flex flex-col'>
        <Text textType='font_16_18_fw_bold_fm_rob'>{t('transactional')}</Text>
        <TextLoading
          textType='font_16_18_fw_bold_fm_rob'
          isLoading={isLoading}
          classNameSkeleton='h-5 sm:h-6 w-32 sm:w-36'
        >
          {t('numberAccount', { number: data?.accountNumber })}
        </TextLoading>
      </Box>
    </Box>
  )
}

export default Description
