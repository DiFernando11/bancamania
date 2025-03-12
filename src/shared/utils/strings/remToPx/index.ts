export function remToPx({
  value,
  baseFontSize,
  withUnit,
}: {
  value: string
  baseFontSize?: number
  withUnit?: boolean
}): string | number {
  const baseFontSizeCalc =
    baseFontSize ??
    (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16)

  const numericValue = parseFloat(value)
  const pxValue = numericValue * baseFontSizeCalc

  return withUnit ? `${pxValue}px` : pxValue
}
