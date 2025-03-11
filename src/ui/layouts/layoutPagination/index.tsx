'use client'
import { AnimatePresence } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { useI18Text } from '@/application/hooks'
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
}) => {
  const lastItemRef = useRef<HTMLDivElement>(null)
  const t = useI18Text()

  useEffect(() => {
    if (lastItemRef.current && isFetchingNextPage) {
      setTimeout(() => {
        lastItemRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }, 500)
    }
  }, [children])

  return (
    <Box className='flex flex-col items-center w-full gap-4'>
      <Box className='w-full flex flex-col gap-4'>
        {isInitialLoading
          ? Skeleton
          : Array.isArray(children) &&
            children.map((child, index) => (
              <AnimationExpand
                key={index}
                ref={index === children.length - 1 ? lastItemRef : null}
              >
                {child}
              </AnimationExpand>
            ))}
        <AnimatePresence>
          {isFetchingNextPage && <AnimationExpand>{Skeleton}</AnimationExpand>}
        </AnimatePresence>
      </Box>
      {hasNextPage && (
        <Box className='w-32 ml-auto self-end'>
          <ButtonText
            onClick={fetchNextPage}
            variant='primary'
            disabled={isFetchingNextPage}
            text={t(isFetchingNextPage ? 'loading' : 'seeMore')}
          />
        </Box>
      )}
    </Box>
  )
}

export default PaginationWrapper
