export const formatMoney = ({
  value,
  locale,
  showSymbol = false,
}: {
  value?: number | string
  locale?: string
  showSymbol?: boolean
}): string => {
  const numericValue = Number(value)

  if (isNaN(numericValue)) return showSymbol ? '0,00 ₿' : '0,00'

  const formatted = new Intl.NumberFormat(locale, {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    style: 'decimal',
  }).format(numericValue)

  return showSymbol ? `${formatted} ₿` : formatted
}
