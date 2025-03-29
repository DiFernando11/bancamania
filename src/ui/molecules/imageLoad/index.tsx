'use client'
import classNames from 'classnames'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Box } from '@/ui/atoms'
import ErrorImage from './errorImage'
import { ImageLoadProps } from './types'

const ImageLoad: React.FC<ImageLoadProps> = ({
  className,
  containerClassName,
  width,
  height,
  alt = '',
  src,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setIsError(false)
  }, [src])

  return (
    <Box
      className={classNames('relative', containerClassName)}
      style={{ height, width }}
    >
      {isLoading && !isError && (
        <Box
          className={classNames(
            'absolute bg-loading-100 animate-pulse',
            className
          )}
          style={{ height, width }}
        />
      )}
      {isError && (
        <ErrorImage
          height={Number(height)}
          width={Number(width)}
          className={className}
        />
      )}
      {!isError && (
        <Image
          {...props}
          src={src}
          alt={alt}
          onLoad={() => setIsLoading(false)}
          onError={() => setIsError(true)}
          width={width}
          height={height}
          style={{ height, minWidth: width, width }}
          className={classNames(
            'transition-opacity duration-500',
            {
              'opacity-0': isLoading,
              'opacity-100': !isLoading,
            },
            className
          )}
        />
      )}
    </Box>
  )
}

export default ImageLoad
