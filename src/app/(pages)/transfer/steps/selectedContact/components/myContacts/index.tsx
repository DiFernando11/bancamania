'use client'
import React, { useState } from 'react'
import { useGetContacts, useI18Text } from '@/application/hooks'
import { InputSearch } from '@/ui/organisms'
import Contacts from '../contacts'
import NewContact from '../newContact'
import { MyContactsProps } from './types'

const MyContacts = ({ updateData, goToStep }: MyContactsProps) => {
  const t = useI18Text('transfer')
  const [alias, setAlias] = useState('')

  const { fetchNextPage, isLoading, data, hasNextPage, isFetchingNextPage } =
    useGetContacts({
      alias,
      enabled: true,
      limit: 1,
    })

  const handleSearch = (val: string) => {
    const formatVal = val.trim()
    setAlias(formatVal)
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
      />
    </>
  )
}

export default MyContacts
