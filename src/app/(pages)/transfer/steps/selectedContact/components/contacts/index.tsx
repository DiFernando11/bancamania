import React from 'react'
import SkeletonsReceipts from '@/app/(pages)/receipts/components/skeletonsReceipts'
import { useGetContacts } from '@/application/hooks'
import { ContactData } from '@/shared'
import { PaginationWrapper } from '@/ui/layouts'
import { STEPS } from '../../../contants'
import CardContact from '../cardContact'
import { ContactsProps } from './types'

const Contacts = ({ updateData, goToStep }: ContactsProps) => {
  const LIMIT = 1
  const { data, isFetchingNextPage, hasNextPage, fetchNextPage, isLoading } =
    useGetContacts({ limit: LIMIT })

  const handleClick = (data: ContactData) => {
    updateData({
      accountNumber: data.account.accountNumber,
      email: data.account.user.email,
      id: data.account.id,
      owner: data.account.owner,
    })
    goToStep(STEPS.confirmTranfers)
  }

  return (
    <div>
      <PaginationWrapper
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
        isInitialLoading={isLoading}
        Skeleton={<SkeletonsReceipts count={LIMIT} />}
      >
        {data?.map(contact => (
          <CardContact
            key={contact.id}
            handleClick={() => handleClick(contact)}
            data={contact}
          />
        ))}
      </PaginationWrapper>
    </div>
  )
}

export default Contacts
