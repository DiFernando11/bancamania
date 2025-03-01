'use client'
import React, { useState, useEffect } from 'react'
import { useI18Text } from '@/application/hooks'
import { GetAccountResponse } from '@/shared'
import { useShareText } from '@/shared/hooks'
import { Box, Button, Icon, Text } from '@/ui/atoms'
import { Modal } from '@/ui/molecules'

const ModalShare = ({ data }: { data?: GetAccountResponse }) => {
  const t = useI18Text()
  const tb = useI18Text('onBoarding')

  // TODO: Sacar gmail de useAuth
  const numberAccount = `${tb('savings')}: ${data?.accountNumber}`
  const message = `${data?.owner}\n${t('titlePage')}\n${numberAccount}\ndiegoapolo2011@gmail.com`

  const { copyToClipboard, shareViaNavigator, shareViaWhatsApp } =
    useShareText(message)

  return (
    <Modal position='bottom' minHeight={'auto'}>
      <Modal.Header className='flex justify-between w-full items-center'>
        <Modal.Title title={t('share')} />
        <Modal.Cerrar />
      </Modal.Header>
      <Box className='flex justify-center w-full'>
        <Box className='grid grid-cols-2 sm:grid-cols-3 gap-2 w-full my-5 mx-2 max-w-160'>
          <Button
            onClick={shareViaWhatsApp}
            variant='secondary'
            className='flex justify-center'
          >
            <Icon name='WhatsApp' className='w-10 h-10' />
          </Button>
          <Button
            className='flex gap-1 justify-center items-center'
            onClick={copyToClipboard}
            variant='secondary'
          >
            <Icon name='Copy' className='w-10 h-10' />
            <Text> {t('copy')}</Text>
          </Button>
          {shareViaNavigator && (
            <Button
              variant='secondary'
              onClick={shareViaNavigator}
              className='flex gap-2 justify-center items-center col-span-3 sm:col-span-1'
            >
              <Icon name='Share' className='w-8 h-8' />
              <Text> {t('others')}</Text>
            </Button>
          )}
        </Box>
      </Box>
    </Modal>
  )
}

export default ModalShare
