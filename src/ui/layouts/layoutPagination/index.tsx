'use client'
import classNames from 'classnames'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useI18Text } from '@/application/hooks'
import { useInfiniteScroll } from '@/shared/hooks'
import { Box } from '@/ui/atoms'
import { AnimationExpand, ButtonText } from '@/ui/molecules'
import { PaginationWrapperProps } from './types'

const PaginationWrapper: React.FC<PaginationWrapperProps> = ({
  children,
  hasNextPage,
  fetchNextPage,
  isInitialLoading,
  isFetchingNextPage = false,
  Skeleton,
  enabledInfinityScroll = false,
  classNameContainer,
  itemsClassName,
}) => {
  const t = useI18Text()

  const [activeInfinityScroll, setActiveInfinityScroll] = useState(false)
  const isPending = isFetchingNextPage || isInitialLoading

  const handleFetchMore = () => {
    if (hasNextPage && activeInfinityScroll) {
      fetchNextPage()
      setActiveInfinityScroll(false)
    }
  }

  const lastElementRef = useInfiniteScroll(
    handleFetchMore,
    enabledInfinityScroll
  )

  return (
    <Box className='flex flex-col items-center w-full gap-4'>
      <Box className={classNames('w-full space-y-4', classNameContainer)}>
        <AnimatePresence mode='popLayout'>
          {Array.isArray(children) &&
            children.map((child, index) => (
              <AnimationExpand
                key={index}
                className={classNames(itemsClassName, 'w-full')}
                onTransitionEnd={() => setActiveInfinityScroll(true)}
              >
                {child}
              </AnimationExpand>
            ))}
        </AnimatePresence>
      </Box>
      <AnimatePresence mode='popLayout'>
        {(isFetchingNextPage || isInitialLoading) && (
          <AnimationExpand className={classNames(itemsClassName, 'w-full')}>
            {Skeleton}
          </AnimationExpand>
        )}
      </AnimatePresence>
      {hasNextPage && !isPending && (
        <Box className='w-32 ml-auto self-end' ref={lastElementRef}>
          <ButtonText onClick={fetchNextPage} text={t('seeMore')} />
        </Box>
      )}
    </Box>
  )
}

export default PaginationWrapper
