'use client'
import React, { useState } from 'react'
import { useGetContacts, useI18Text } from '@/application/hooks'
import { InputSearch } from '@/ui/organisms'
import Contacts from '../contacts'
import NewContact from '../newContact'
import { MyContactsProps } from './types'

const MyContacts = ({ updateData, goToStep }: MyContactsProps) => {
  const t = useI18Text('transfer')
  const [search, setSearch] = useState('')
  const limit = 10

  const { fetchNextPage, isLoading, data, hasNextPage, isFetchingNextPage } =
    useGetContacts({
      enabled: true,
      limit,
      search,
    })

  const handleSearch = (val: string) => {
    const formatVal = val.trim()
    setSearch(formatVal)
  }

  return (
    <>
      <InputSearch onSearch={handleSearch} placeholder={t('searchContactPh')} />
      <NewContact goToStep={goToStep} />
      <Contacts
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isLoading={isLoading}
        data={data}
        updateData={updateData}
        goToStep={goToStep}
        limit={limit}
      />
    </>
  )
}

export default MyContacts
