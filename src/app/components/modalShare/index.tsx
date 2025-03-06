'use client'
import classNames from 'classnames'
import React, { ReactNode } from 'react'
import { useI18Text } from '@/application/hooks'
import { Box } from '@/ui/atoms'
import { Modal } from '@/ui/molecules'
import CopyToClipboard from './copyToClipboard'
import DownloadPdf from './donwloadPdf'
import DownloadImage from './downloadImage'
import ShareNavigator from './shareNavigator'
import ShareWhatsapp from './shareWhatsapp'

const ModalShare = ({
  children,
  className,
  title,
}: {
  children: ReactNode
  className?: string
  title?: string
}) => {
  const t = useI18Text()
  const titleShare = title ?? t('share')

  return (
    <Modal position='bottom' minHeight={'auto'}>
      <Modal.Header className='flex justify-between w-full items-center'>
        <Modal.Title title={titleShare} />
        <Modal.Cerrar />
      </Modal.Header>
      <Box className={classNames('flex justify-center w-full')}>
        <Box className={classNames('w-full my-5 mx-2 max-w-160', className)}>
          {children}
        </Box>
      </Box>
    </Modal>
  )
}

ModalShare.ShareNavigator = ShareNavigator
ModalShare.ShareWhatsapp = ShareWhatsapp
ModalShare.CopyToClipboard = CopyToClipboard
ModalShare.DownloadImage = DownloadImage
ModalShare.DownloadPdf = DownloadPdf

export default ModalShare
