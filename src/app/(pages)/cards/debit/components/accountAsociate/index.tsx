'use client'
import React from 'react'
import { useGetAccount, useI18Text } from '@/application/hooks'
import { clientRoutes } from '@/routes/clientRoutes'
import { useNavigation } from '@/shared/hooks'
import { Box, Text } from '@/ui/atoms'
import { CardAccount, SkeletonLoader } from '@/ui/organisms'

const AccountAsociate = () => {
  const router = useNavigation()
  const t = useI18Text('tarjetas')
  const { data, isLoading } = useGetAccount()

  return (
    <>
      <Text textType='font_20_24_fw_bold_fm_rob_text-100'>
        {t('associatedAccount')}
      </Text>
      <Box className='h-44'>
        <CardAccount
          balance={data?.balance}
          className='w-full self-center gap-4 cursor-pointer'
          isLoading={isLoading}
          onClick={() => router.push(clientRoutes.account.path)}
          nextStepComponent={
            <SkeletonLoader isLoading={isLoading} classNameSkeleton='h-5 w-48'>
              <Text textType='font_18_fw_bold_fm_rob' className='break-all'>
                {t('numberCard', { number: data?.accountNumber })}
              </Text>
            </SkeletonLoader>
          }
        />
      </Box>
    </>
  )
}

export default AccountAsociate
