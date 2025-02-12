import { MaskReplaceProps } from './types'

export const maskReplace = ({
  text,
  start = 0,
  end = 4,
  maskChar = 'X',
}: MaskReplaceProps) => {
  if (start < 0 || end > text.length || start >= end) {
    throw new Error('Rango inválido')
  }

  return (
    text.substring(0, start) +
    maskChar.repeat(end - start) +
    text.substring(end)
  )
}
