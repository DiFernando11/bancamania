'use client'
import React from 'react'
import ButtonActionSimple from '@/app/components/buttonActionSimple'
import { useGetReceiptByUUID, useI18Text } from '@/application/hooks'
import { useModal } from '@/shared/hooks'
import { LayoutAuthenticationPage } from '@/ui/layouts'
import ModalShareReceipt from './components/modalShareReceipt'
import Receipt from './components/receipt'

const ReceiptByUUUIDPage = ({ params }: { params: { id: string } }) => {
  const tCommon = useI18Text()
  const { openModal } = useModal()
  const { data, isLoading } = useGetReceiptByUUID({ receiptId: params.id })

  return (
    <LayoutAuthenticationPage
      footerBox={
        <ButtonActionSimple
          primaryOnClick={() =>
            openModal(<ModalShareReceipt receiptId={params.id} />)
          }
          disablePrimary={isLoading}
          primaryText={tCommon('actions')}
        />
      }
    >
      <Receipt data={data} isLoading={isLoading} />
    </LayoutAuthenticationPage>
  )
}

export default ReceiptByUUUIDPage
