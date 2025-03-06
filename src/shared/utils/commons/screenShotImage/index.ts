import html2canvas from 'html2canvas'

export const screenShotImage = async ({
  id,
}: {
  id: string
}): Promise<{
  imageBlob: Blob
  file: File
  imageUrl: string
}> => {
  const element = document.getElementById(id)
  if (!element) {
    throw new Error('No se encontró el comprobante.')
  }

  try {
    const canvas = await html2canvas(element, {
      backgroundColor: null,
      scale: 2,
    })

    const padding = 20
    const newCanvas = document.createElement('canvas')
    newCanvas.width = canvas.width + padding * 2
    newCanvas.height = canvas.height + padding * 2
    const ctx = newCanvas.getContext('2d')
    if (ctx) {
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, newCanvas.width, newCanvas.height)
      ctx.drawImage(canvas, padding, padding)
    }

    const imageBlob: Blob | null = await new Promise(resolve =>
      newCanvas.toBlob(blob => resolve(blob), 'image/png')
    )
    if (!imageBlob) throw new Error('Error al generar la imagen')

    const file = new File([imageBlob], `${id}.png`, { type: 'image/png' })
    const imageUrl = URL.createObjectURL(imageBlob)

    return { file, imageBlob, imageUrl }
  } catch (error) {
    console.error('Error al capturar la imagen:', error)
    throw error
  }
}
