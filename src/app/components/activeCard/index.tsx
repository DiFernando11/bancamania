import React, { useEffect, useRef } from 'react'
import { useI18Text, useRemoveQueries } from '@/application/hooks'
import { CardStatus } from '@/shared'
import { useOnUnmount } from '@/shared/hooks'
import { Box, Text } from '@/ui/atoms'
import { Toggle } from '@/ui/molecules'
import { AlertErrorService, SkeletonLoader } from '@/ui/organisms'
import { ActiveCardProps } from './types'

const ActiveCard = ({
  status,
  isLoadingCard,
  setChecked,
  isChecked,
  handleActionService,
  isError,
  error,
  isLoading,
  queryKey,
  paramsQuery,
}: ActiveCardProps) => {
  const t = useI18Text('tarjetas')
  const { invalidate } = useRemoveQueries()
  const stateRef = useRef({
    initial: status === CardStatus.ACTIVE,
    latestChecked: isChecked,
  })

  const handleToogle = () => {
    if (isLoading) return
    stateRef.current.latestChecked = !isChecked
    setChecked(!isChecked)
  }

  const handleUnload = async (isRefetch: boolean = false) => {
    if (stateRef.current.latestChecked !== stateRef.current.initial) {
      if (isRefetch) {
        invalidate({ queryKey: [queryKey, paramsQuery] })
      }
      await handleActionService({})
      stateRef.current.initial = stateRef.current.latestChecked
    }
  }

  const handleBeforeUnload = async (event: BeforeUnloadEvent) => {
    if (stateRef.current.latestChecked !== stateRef.current.initial) {
      event.preventDefault()
      await handleUnload(false)
    }
  }

  useOnUnmount({
    onBeforeUnload: handleBeforeUnload,
    onUnmount: () => handleUnload(true),
    onVisibilityChange: () => handleUnload(false),
  })

  useEffect(() => {
    if (status) {
      const currentCheck = status === CardStatus.ACTIVE
      stateRef.current.initial = currentCheck
      stateRef.current.latestChecked = currentCheck
      setChecked(status === CardStatus.ACTIVE)
    }
  }, [status])

  return (
    <Box className='flex flex-col gap-4'>
      <Box className='flex justify-between gap-4 items-center'>
        <SkeletonLoader isLoading={isLoadingCard} classNameSkeleton='w-40 h-4'>
          <Text textType='font_16_18_fm_rob'>
            {isChecked ? t('desactiveCard') : t('activateCard')}
          </Text>
        </SkeletonLoader>
        <SkeletonLoader
          isLoading={isLoadingCard}
          classNameSkeleton='rounded-2xl w-16 h-8'
        >
          <Toggle
            width={'4rem'}
            height={'2rem'}
            onChange={handleToogle}
            value={isChecked}
            isLoading={isLoading}
          />
        </SkeletonLoader>
      </Box>
      <AlertErrorService isError={isError} error={error} />
    </Box>
  )
}

export default ActiveCard
