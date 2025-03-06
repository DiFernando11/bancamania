'use client'
import React from 'react'
import ModalShare from '@/app/components/modalShare'
import { useI18Text } from '@/application/hooks'
import { GetAccountResponse } from '@/shared'
import { useShareText } from '@/shared/hooks'
import { Box } from '@/ui/atoms'

const ModalShareAccount = ({ data }: { data?: GetAccountResponse }) => {
  const t = useI18Text('account')
  const tCommon = useI18Text()
  const { shareViaWhatsApp, shareViaNavigator, copyToClipboard } =
    useShareText()

  const numberAccount = `${t('transactional')}: ${data?.accountNumber}`
  const email = 'diegoapolo2011@gmail.com'
  const message = `${data?.owner}\n${tCommon('titlePage')}\n${numberAccount}\n${email}`

  return (
    <ModalShare className='flex flex-col justify-center items-center gap-4'>
      <Box className='flex w-full gap-4'>
        <ModalShare.CopyToClipboard onClick={() => copyToClipboard(message)} />
        <ModalShare.ShareWhatsapp onClick={() => shareViaWhatsApp(message)} />
      </Box>
      <ModalShare.ShareNavigator onClick={() => shareViaNavigator(message)} />
    </ModalShare>
  )
}

export default ModalShareAccount
