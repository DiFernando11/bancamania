'use client'
import classNames from 'classnames'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import { clientRoutes } from '@/routes/clientRoutes'
import { useModal, useNavigation } from '@/shared/hooks'
import { Box, Icon, Text } from '@/ui/atoms'
import { ModalMenuBottom } from '@/ui/molecules'

const Footer = () => {
  const router = useNavigation()
  const { openModal } = useModal()
  const t = useI18Text()

  return (
    <Box
      className={classNames(
        'flex shadow-top-accent rounded-t-xl items-center justify-between',
        'sm:hidden',
        'row-start-3 row-end-4 col-span-1'
      )}
    >
      <Box
        className='flex-1 flex justify-center items-center text-sm'
        onClick={() => router.push(clientRoutes.consolidada.path)}
      >
        <Icon name='Home' className='cursor-pointer w-9 h-9' />
      </Box>
      <Box
        className='-mt-8 text-center cursor-pointer'
        onClick={() => openModal(<ModalMenuBottom />)}
      >
        <Icon name='Logo' className='w-12 h-12' />
        <Text className='mt-1' textType='font_14_fw_bold_fm_rob'>
          {t('menu')}
        </Text>
      </Box>
      <Box className='flex-1 flex justify-center items-center text-sm cursor-pointer'>
        <Icon name='Transfers' className='w-10 h-10' />
      </Box>
    </Box>
  )
}

export default Footer
