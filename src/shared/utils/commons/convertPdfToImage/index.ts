export const convertPdfToImage = async (pdfBlob: Blob): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(pdfBlob)

    reader.onload = async () => {
      const img = new Image()
      img.src = reader.result as string
      img.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.width = img.width
        canvas.height = img.height

        const ctx = canvas.getContext('2d')
        if (!ctx)
          return reject(new Error('No se pudo obtener el contexto del canvas'))

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

        canvas.toBlob(blob => {
          if (blob) resolve(blob)
          else reject(new Error('Error al convertir PDF a imagen'))
        }, 'image/png')
      }
    }

    reader.onerror = error => reject(error)
  })
}
