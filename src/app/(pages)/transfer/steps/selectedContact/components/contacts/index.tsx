import React from 'react'
import { ContactData } from '@/shared'
import { PaginationWrapper } from '@/ui/layouts'
import { STEPS } from '../../../contants'
import CardContact from '../cardContact'
import { ContactsProps } from './types'
import SkeletonContacts from '../cardContact/skeletonContacts'

const Contacts = ({
  updateData,
  goToStep,
  data,
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage,
  isLoading,
  limit,
}: ContactsProps) => {
  const handleClick = (data: ContactData) => {
    updateData({
      accountNumber: data.account.accountNumber,
      alias: data.alias,
      email: data.account.user.email,
      id: data.account.id,
      owner: data.account.owner,
    })
    goToStep(STEPS.confirmTranfers)
  }

  return (
    <PaginationWrapper
      isFetchingNextPage={isFetchingNextPage}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      isInitialLoading={isLoading}
      Skeleton={<SkeletonContacts count={limit} />}
    >
      {data?.map(contact => (
        <CardContact
          key={contact.id}
          handleClick={() => handleClick(contact)}
          data={contact}
        />
      ))}
    </PaginationWrapper>
  )
}

export default Contacts
