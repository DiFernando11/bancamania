'use client'
import classNames from 'classnames'
import React, { forwardRef } from 'react'
import { FieldError, useFormContext } from 'react-hook-form'
import { useGetItemsStore } from '@/application/hooks/store'
import { Box } from '@/ui/atoms'
import { PaginationWrapper } from '@/ui/layouts'
import { TextError } from '@/ui/organisms'
import GaleryCards from '@/ui/organisms/galeryCards'
import CardItemStore from '../cardItemStore'
import { SelectableCardsGroupStoreProps } from './types'
import { FORM_SELECTED_ITEMS_NAME, FormSelectedItems } from '../../types'

const SelectableCardsGroupStore = forwardRef<
  HTMLDivElement,
  SelectableCardsGroupStoreProps
>(({ value = [], onChange }, ref) => {
  const {
    formState: { errors },
  } = useFormContext<FormSelectedItems>()

  const error = errors?.[FORM_SELECTED_ITEMS_NAME.selectedCards]

  const LIMIT = 5
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetItemsStore({
      limit: LIMIT,
    })

  return (
    <Box ref={ref}>
      <TextError
        id={FORM_SELECTED_ITEMS_NAME.selectedCards}
        error={error as FieldError}
        isValidate={Boolean(error)}
        className='mb-2'
      />
      <PaginationWrapper
        hasNextPage={hasNextPage}
        isInitialLoading={isLoading}
        fetchNextPage={fetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
        Skeleton={<GaleryCards.Skeleton count={LIMIT} />}
        enabledInfinityScroll
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
