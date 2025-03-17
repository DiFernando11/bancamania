import React from 'react'
import ActiveCard from '@/app/components/activeCard'
import { useUpdateStatusCredit } from '@/application/hooks'
import { GET_CREDIT_BY_ID } from '@/shared/utils/constantsQuery'
import { ActiveCardCreditProps } from './types'

const ActiveCardCredit = ({
  status,
  isLoadingCard,
  setChecked,
  isChecked,
  stepData,
}: ActiveCardCreditProps) => {
  const { handleActionService, isError, error, isLoading } =
    useUpdateStatusCredit({ id: stepData.id })

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
      queryKey={GET_CREDIT_BY_ID}
      paramsQuery={stepData.id}
    />
  )
}

export default ActiveCardCredit
