import classNames from 'classnames'
import { AnimatePresence } from 'framer-motion'
import { AnimationContainer } from '@/ui/atoms'
import { Skeleton } from '@/ui/molecules'
import { SkeletonLoaderProps } from './types'

const SkeletonLoader = ({
  isLoading,
  children,
  classNameSkeleton = 'w-full h-5',
}: SkeletonLoaderProps) => {
  return (
    <AnimatePresence mode='wait'>
      {isLoading ? (
        <Skeleton className={classNames(classNameSkeleton)} />
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
  )
}

export default SkeletonLoader
