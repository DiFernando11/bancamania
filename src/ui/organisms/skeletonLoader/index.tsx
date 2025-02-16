import { AnimatePresence } from 'framer-motion'
import { AnimationContainer } from '@/ui/atoms'
import { Skeleton } from '@/ui/molecules'
import { SkeletonLoaderProps } from './types'

const SkeletonLoader = ({
  isLoading,
  children,
  width,
  height,
  rounded,
}: SkeletonLoaderProps) => {
  return (
    <div style={{ height, width }}>
      <AnimatePresence mode='wait'>
        {isLoading ? (
          <Skeleton width={width} height={height} rounded={rounded} />
        ) : (
          <AnimationContainer
            key='content'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </AnimationContainer>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SkeletonLoader
