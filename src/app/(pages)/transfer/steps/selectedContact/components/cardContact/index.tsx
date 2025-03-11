'use client'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import { Box, Text } from '@/ui/atoms'
import { Avatar } from '@/ui/molecules'
import { SelectedOption } from '@/ui/organisms'
import SkeletonCardContact from './skeletonCardContact'
import { CardContactProps } from './types'

const CardContact = ({ handleClick, data }: CardContactProps) => {
  const t = useI18Text()
  const tAccount = useI18Text('account')

  return (
    <Box>
      {data?.isFirstElement && (
        <Text
          textType='font_18_fw_bold_fm_rob'
          className='pl-4 sm:pl-5 mb-4 pb-4 border-b border-primary-100'
        >
          {data?.alias?.charAt(0)?.toUpperCase()}
        </Text>
      )}
      <SelectedOption onClick={handleClick}>
        <Box className='flex items-center gap-4'>
          <Avatar
            name={data?.alias}
            className='w-10 h-10 min-w-10 sm:min-w-12 sm:w-12 sm:h-12 text-xl'
          />
          <Box>
            <Text textType='font_18_fw_bold_fm_rob' className='break-all'>
              {data?.alias}
            </Text>
            <Text>{t('titlePage')}</Text>
            <Text>
              {tAccount('transactional')} {data?.account?.accountNumber}
            </Text>
          </Box>
        </Box>
      </SelectedOption>
    </Box>
  )
}
CardContact.Skeleton = SkeletonCardContact

export default CardContact
