export const formatToMoneyString = (rawDigits: string | number): string => {
  if (!rawDigits) return ''
  const asNumber = parseInt(rawDigits.toString(), 10)
  if (isNaN(asNumber)) return ''

  return (asNumber / 100).toFixed(2)
}
