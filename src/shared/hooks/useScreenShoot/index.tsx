'use client'
import { useState } from 'react'
import { screenShotImage } from '@/shared/utils'
import { useShareText } from '../useShareText'

export const useScreenShoot = ({ id }: { id: string }) => {
  const [imageReceipt, setImageReceipt] = useState<{
    file?: File
    imageBlob?: Blob
    imageUrl?: string
  }>({
    file: undefined,
    imageBlob: undefined,
    imageUrl: undefined,
  })
  const [isLoading, setIsLoading] = useState(false)
  const { copyImageToClipboard, shareImage, downloadImage } = useShareText()

  const shootScreen = async () => {
    setIsLoading(true)
    const screenShot = await screenShotImage({ id })
    setIsLoading(false)

    return screenShot
  }

  const getCurrentImage = async () => {
    if (!imageReceipt.imageBlob) {
      const screenShot = await shootScreen()

      setImageReceipt(screenShot)

      return screenShot
    }

    return imageReceipt
  }

  const handleCopyClipboard = async () => {
    const { imageBlob } = await getCurrentImage()
    if (imageBlob) {
      copyImageToClipboard(imageBlob)
    }
  }

  const handleShareImage = async () => {
    const { imageBlob, file } = await getCurrentImage()
    if (imageBlob && file) {
      shareImage(file, imageBlob)
    }
  }

  const handleDownloadImage = async () => {
    if (!imageReceipt.imageBlob) {
      const screenShot = await shootScreen()
      setImageReceipt(screenShot)

      return downloadImage(screenShot.imageUrl, 'comprobante')
    }

    const currentUrl = URL.createObjectURL(imageReceipt.imageBlob)
    downloadImage(currentUrl, 'comprobante')

    return imageReceipt
  }

  return {
    handleCopyClipboard,
    handleDownloadImage,
    handleShareImage,
    isLoading,
  }
}
