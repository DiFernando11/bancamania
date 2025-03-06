import React from 'react'
import ModalShare from '@/app/components/modalShare'
import { useGetPdfReceipt, useI18Text } from '@/application/hooks'
import { useScreenShoot } from '@/shared/hooks'
import { Box } from '@/ui/atoms'

const ModalShareReceipt = ({ receiptId }: { receiptId: string }) => {
  const t = useI18Text()
  const { downloadPdf, isLoading: isLoadingPdf } = useGetPdfReceipt()
  const {
    handleCopyClipboard,
    handleDownloadImage,
    handleShareImage,
    isLoading,
  } = useScreenShoot({ id: 'comprobante' })

  return (
    <ModalShare
      title={t('actions')}
      className='flex flex-col justify-center items-center gap-4'
    >
      <Box className='flex w-full gap-4'>
        <ModalShare.CopyToClipboard
          onClick={handleCopyClipboard}
          disabled={isLoading}
        />
        <ModalShare.ShareNavigator
          onClick={handleShareImage}
          disabled={isLoading}
        />
      </Box>
      <Box className='flex w-full gap-4'>
        <ModalShare.DownloadPdf
          onClick={() => downloadPdf({ receiptId })}
          disabled={isLoadingPdf}
        />
        <ModalShare.DownloadImage
          onClick={handleDownloadImage}
          disabled={isLoading}
        />
      </Box>
    </ModalShare>
  )
}

export default ModalShareReceipt
