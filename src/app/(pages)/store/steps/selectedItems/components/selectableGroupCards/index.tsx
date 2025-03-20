'use client'
import React, { forwardRef } from 'react'
import { useGetItemsStore } from '@/application/hooks/store'
import GaleryCards from '@/ui/organisms/galeryCards'
import CardItemStore from '../cardItemStore'
import { SelectableCardsGroupStoreProps } from './types'

const SelectableCardsGroupStore = forwardRef<
  HTMLDivElement,
  SelectableCardsGroupStoreProps
>(({ value = [], onChange }, ref) => {
  const LIMIT = 3
  const { data, isLoading } = useGetItemsStore({ limit: LIMIT })

  if (isLoading) return <GaleryCards.Skeleton count={LIMIT} />

  return (
    <GaleryCards ref={ref}>
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
    </GaleryCards>
  )
})

SelectableCardsGroupStore.displayName = 'SelectableCardsGroupStore'

export default SelectableCardsGroupStore
