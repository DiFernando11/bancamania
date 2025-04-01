'use client'
import classNames from 'classnames'
import React, { useState } from 'react'
import MonthsMovements from '@/app/components/modalMonthsMovements/monthsMovements'
import {
  useDownloadStatementCredit,
  useGetMonthsStatementCredit,
  useI18Text,
} from '@/application/hooks'
import { Box } from '@/ui/atoms'
import { Modal, Skeleton } from '@/ui/molecules'
import { AlertErrorService } from '@/ui/organisms'

const ModalDonwnloadStatement = ({ id }: { id: string }) => {
  const t = useI18Text('account')
  const {
    data,
    isLoading: isLoadingMonths,
    isError,
    error,
  } = useGetMonthsStatementCredit({
    creditId: id,
  })

  const {
    handleActionService,
    isLoading,
    isError: isErroDownload,
    error: errorDownload,
  } = useDownloadStatementCredit()
  const [selectId, setSelectId] = useState<string | null>(null)

  const handleAction = (period: string) => {
    setSelectId(period)
    handleActionService({ creidtID: id, period })
  }

  return (
    <Modal position='right' maxWidth={'30rem'} width={'100%'} minWidth={'none'}>
      <Modal.Header className='flex justify-between w-full items-center'>
        <Modal.Title title={t('statement')} />
        <Modal.Cerrar />
      </Modal.Header>
      <Box
        className={classNames('overflow-auto p-4 flex flex-col gap-4')}
        style={{
          scrollbarWidth: 'none',
        }}
      >
        <AlertErrorService isError={isError} error={error} />
        <AlertErrorService isError={isErroDownload} error={errorDownload} />
        {isLoadingMonths && <Skeleton className='h-10' />}
        {data?.map(mov => (
          <MonthsMovements
            isLoading={isLoadingMonths}
            onClick={() => handleAction(mov.id)}
            key={mov.id}
            text={mov.text}
            loadingSelected={isLoading && selectId === mov.id}
          />
        ))}
      </Box>
    </Modal>
  )
}

export default ModalDonwnloadStatement
