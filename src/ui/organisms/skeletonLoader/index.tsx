import classNames from 'classnames'
import { AnimatePresence } from 'framer-motion'
import { AnimationContainer, Box } from '@/ui/atoms'
import { Skeleton } from '@/ui/molecules'
import { SkeletonLoaderProps } from './types'

const SkeletonLoader = ({
  isLoading,
  children,
  width,
  height,
  rounded,
  className,
  classNameSkeleton,
}: SkeletonLoaderProps) => {
  return (
    <Box className={className} style={{ height, width }}>
      <AnimatePresence mode='wait'>
        {isLoading ? (
          <Skeleton
            className={classNames(classNameSkeleton, width, height, rounded)}
          />
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
    </Box>
  )
}

export default SkeletonLoader
