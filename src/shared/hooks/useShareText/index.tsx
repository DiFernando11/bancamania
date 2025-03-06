'use client'

export const useShareText = () => {
  const shareViaWhatsApp = (message: string) => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const copyToClipboard = async (message: string) => {
    try {
      await navigator.clipboard.writeText(message)
      alert('Copiado al portapapeles')
    } catch (error) {
      console.error('Error al copiar:', error)
    }
  }

  const copyImageToClipboard = async (imageBlob: Blob): Promise<void> => {
    try {
      await navigator.clipboard.write([
        new ClipboardItem({
          'image/png': imageBlob,
        }),
      ])
      alert(
        'Imagen copiada al portapapeles. Ahora puedes pegarla en WhatsApp u otra app.'
      )
    } catch (error) {
      console.error('Error al copiar la imagen:', error)
      alert('No se pudo copiar la imagen. Intenta manualmente.')
    }
  }

  const shareImage = async (file: File, imageBlob: Blob): Promise<void> => {
    if (navigator.share && navigator.canShare({ files: [file] })) {
      await navigator.share({
        files: [file],
        text: 'Aquí tienes tu comprobante en imagen.',
        title: 'Comprobante',
      })
    } else {
      copyImageToClipboard(imageBlob)
      alert(`Tu dispositivo no soporta compartir imágenes,
        se ha copiado la imagen para que puedas compartila manualmente`)
    }
  }

  const shareViaNavigator = async (message: string) => {
    if (navigator.share) {
      try {
        await navigator.share({ text: message })
      } catch (error) {
        console.error(error)
        alert(
          `Tu dispositivo no soporta compartir text,
          se ha copiado para que lo puedas hacer manualmente`
        )
      }
    } else {
      copyToClipboard(message)
    }
  }

  const downloadImage = (imageUrl: string, title: string): void => {
    const a = document.createElement('a')
    a.href = imageUrl
    a.download = `${title}.png`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(imageUrl)
  }

  return {
    copyImageToClipboard,
    copyToClipboard,
    downloadImage,
    shareImage,
    shareViaNavigator,
    shareViaWhatsApp,
  }
}
