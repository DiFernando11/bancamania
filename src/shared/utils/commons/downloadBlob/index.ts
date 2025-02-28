export const downloadBlob = async ({
  blob,
  fileName = 'untitle',
}: {
  blob: Blob
  fileName: string
}) => {
  if (!blob) return
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', fileName)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  window.URL.revokeObjectURL(url)
}
