import React from 'react'
import ActiveCard from '@/app/components/activeCard'
import { BaseCardProps } from '@/app/components/activeCard/types'
import { useUpdateStatusDebit } from '@/application/hooks'
import { GET_CARD_DEBIT } from '@/shared/utils/constantsQuery'

const ActiveCardDebit = ({
  status,
  isLoadingCard,
  setChecked,
  isChecked,
}: BaseCardProps) => {
  const { handleActionService, isError, error, isLoading } =
    useUpdateStatusDebit()

  return (
    <ActiveCard
      isChecked={isChecked}
      status={status}
      isLoadingCard={isLoadingCard}
      setChecked={setChecked}
      handleActionService={handleActionService}
      isError={isError}
      error={error}
      isLoading={isLoading}
      queryKey={GET_CARD_DEBIT}
    />
  )
}

export default ActiveCardDebit
