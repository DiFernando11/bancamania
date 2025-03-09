export const formatToMoney = (rawDigits: string | number): number => {
  if (!rawDigits) return 0
  const asNumber = parseInt(rawDigits.toString(), 10)
  if (isNaN(asNumber)) return 0

  return parseFloat((asNumber / 100).toFixed(2))
}
