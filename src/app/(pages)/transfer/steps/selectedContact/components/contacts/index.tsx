import React from 'react'
import { useI18Text } from '@/application/hooks'
import { ContactData } from '@/shared'
import { Box } from '@/ui/atoms'
import { PaginationWrapper } from '@/ui/layouts'
import { AlertInfoAnimation } from '@/ui/organisms'
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
  const t = useI18Text()
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
    <Box>
      <PaginationWrapper
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
        isInitialLoading={isLoading}
        Skeleton={<SkeletonContacts count={limit} />}
        limit={limit}
      >
        {data?.map(contact => (
          <CardContact
            key={contact.id}
            handleClick={() => handleClick(contact)}
            data={contact}
          />
        ))}
      </PaginationWrapper>
      <AlertInfoAnimation
        isVisible={Boolean(data && data?.length === 0 && !isLoading)}
        message={t('notFoundResult')}
      />
    </Box>
  )
}

export default Contacts
