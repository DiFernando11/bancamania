import { ImageProps } from 'next/image'

export type ImageLoadProps = Omit<ImageProps, 'ref'> & {
  containerClassName?: string
}
