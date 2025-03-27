import classNames from 'classnames'
import Image from 'next/image'
import React, { useState } from 'react'
import { Box } from '@/ui/atoms'
import ErrorImage from './errorImage'
import { ImageLoadProps } from './types'

const ImageLoad: React.FC<ImageLoadProps> = ({
  className,
  containerClassName,
  width,
  height,
  alt = '',
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  return (
    <Box
      className={classNames('relative', containerClassName)}
      style={{ height, width }}
    >
      {isLoading && (
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
      <Image
        {...props}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsError(true)}
        width={width}
        height={height}
        style={{ height, width }}
        className={classNames(
          'transition-opacity duration-500',
          {
            'opacity-0': isLoading,
            'opacity-100': !isLoading,
          },
          className
        )}
      />
    </Box>
  )
}

export default ImageLoad
