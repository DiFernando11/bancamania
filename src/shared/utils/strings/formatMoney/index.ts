export const formatMoney = (
  value?: number | string,
  locale: string = 'es-ES'
): string => {
  const numericValue = Number(value)

  if (isNaN(numericValue)) return '0,00'

  return new Intl.NumberFormat(locale, {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    style: 'decimal',
  }).format(numericValue)
}
