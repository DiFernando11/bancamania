'use client'
import classNames from 'classnames'
import React, { forwardRef } from 'react'
import { useGetItemsStore } from '@/application/hooks/store'
import { Box } from '@/ui/atoms'
import { PaginationWrapper } from '@/ui/layouts'
import GaleryCards from '@/ui/organisms/galeryCards'
import CardItemStore from '../cardItemStore'
import { SelectableCardsGroupStoreProps } from './types'

const SelectableCardsGroupStore = forwardRef<
  HTMLDivElement,
  SelectableCardsGroupStoreProps
>(({ value = [], onChange }, ref) => {
  const LIMIT = 5
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetItemsStore({
      limit: LIMIT,
    })

  return (
    <Box ref={ref}>
      <PaginationWrapper
        hasNextPage={hasNextPage}
        isInitialLoading={isLoading}
        fetchNextPage={fetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
        Skeleton={<GaleryCards.Skeleton count={LIMIT} />}
        enabledInfinityScroll
        limit={LIMIT}
        classNameContainer='flex flex-wrap gap-4 justify-center items-stretch !space-y-0'
        itemsClassName={classNames(
          'flex-1 w-full h-auto border p-4 justify-center',
          'border-primary-100 rounded-lg flex min-w-[16rem]'
        )}
      >
        {data?.map(item => (
          <CardItemStore
            key={item.id}
            id={item.id}
            onChange={onChange}
            selectedValues={value}
            image={item.image}
            title={item.title}
            description={item.description}
            miles={item.miles}
            price={item.price}
          />
        ))}
      </PaginationWrapper>
    </Box>
  )
})

SelectableCardsGroupStore.displayName = 'SelectableCardsGroupStore'

export default SelectableCardsGroupStore
