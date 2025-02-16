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
    <AnimationContainer
      initial={{ opacity: 0, x: isLoading ? 100 : -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: isLoading ? -100 : 100 }}
      transition={{ duration: 0.5 }}
    >
      {isLoading ? (
        <Skeleton width={width} height={height} rounded={rounded} />
      ) : (
        children
      )}
    </AnimationContainer>
  )
}

export default SkeletonLoader
