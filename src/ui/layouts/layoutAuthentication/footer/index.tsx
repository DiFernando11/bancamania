'use client'
import classNames from 'classnames'
import { useRouter } from 'next/navigation'
import React from 'react'
import { clientRoutes } from '@/routes/clientRoutes'
import { useModal } from '@/shared/hooks'
import { Box, Icon, Text } from '@/ui/atoms'
import { ModalMenuBottom } from '@/ui/molecules'

const Footer = () => {
  const router = useRouter()
  const { openModal } = useModal()

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
        <Icon name='Home' className='cursor-pointer' />
      </Box>
      <Box
        className='-mt-8 text-center cursor-pointer'
        onClick={() => openModal(<ModalMenuBottom />)}
      >
        <Icon name='Logo' width={50} height={50} />
        <Text className='text-sm mt-1'>Menu</Text>
      </Box>
      <Box className='flex-1 flex justify-center items-center text-sm cursor-pointer'>
        <Icon name='Transfers' />
      </Box>
    </Box>
  )
}

export default Footer
