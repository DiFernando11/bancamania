'use client'
import classNames from 'classnames'
import { AnimatePresence } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { useI18Text } from '@/application/hooks'
import { useInfiniteScroll } from '@/shared/hooks'
import { Box, Text } from '@/ui/atoms'
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
  limit = 3,
  classNameContainer,
  itemsClassName,
}) => {
  const t = useI18Text()
  const isFirstElementNewPageRef = useRef<HTMLDivElement | null>(null)
  const prevRef = useRef<HTMLElement | null>(null)

  const [activeInfinityScroll, setActiveInfinityScroll] = useState(false)
  const isPending = isFetchingNextPage || isInitialLoading

  const handleFetchMore = () => {
    if (hasNextPage && !isPending && activeInfinityScroll) {
      fetchNextPage && fetchNextPage()
      setActiveInfinityScroll(false)
    }
  }

  const lastElementRef = useInfiniteScroll(
    handleFetchMore,
    enabledInfinityScroll
  )

  useEffect(() => {
    const current = isFirstElementNewPageRef.current
    let timeoutId: ReturnType<typeof setTimeout>

    if (current && current !== prevRef.current && !isPending) {
      prevRef.current = current

      timeoutId = setTimeout(() => {
        current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setActiveInfinityScroll(true)
      }, 100)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [isFirstElementNewPageRef.current, isPending])

  return (
    <Box className='flex flex-col items-center w-full gap-4'>
      <Box className={classNames('w-full space-y-4', classNameContainer)}>
        {Array.isArray(children) &&
          children.map((child, index) => (
            <AnimationExpand
              key={index}
              className={classNames(itemsClassName)}
              ref={
                index === children.length - limit
                  ? isFirstElementNewPageRef
                  : null
              }
            >
              {child}
            </AnimationExpand>
          ))}
      </Box>
      <AnimatePresence>
        {(isFetchingNextPage || isInitialLoading) && (
          <AnimationExpand>{Skeleton}</AnimationExpand>
        )}
      </AnimatePresence>
      {hasNextPage && !enabledInfinityScroll && (
        <Box className='w-32 ml-auto self-end'>
          <ButtonText
            onClick={fetchNextPage}
            variant='primary'
            disabled={isFetchingNextPage}
            text={t(isFetchingNextPage ? 'loading' : 'seeMore')}
          />
        </Box>
      )}
      {hasNextPage && (
        <div
          ref={lastElementRef}
          className='opacity-0 pointer-events-none select-none'
        />
      )}
    </Box>
  )
}

export default PaginationWrapper
