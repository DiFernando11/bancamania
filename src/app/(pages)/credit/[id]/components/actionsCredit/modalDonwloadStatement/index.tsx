'use client'
import classNames from 'classnames'
import React from 'react'
import MonthsMovements from '@/app/components/modalMonthsMovements/monthsMovements'
import { useGetMonthsStatementCredit, useI18Text } from '@/application/hooks'
import { Box } from '@/ui/atoms'
import { Modal } from '@/ui/molecules'

const ModalDonwnloadStatement = ({ id }: { id: string }) => {
  const t = useI18Text()
  const { data, isLoading } = useGetMonthsStatementCredit({ creditId: id })

  console.log(data, 'data')

  const handleAction = (mov: string) => {
    console.log(mov)
  }

  return (
    <Modal position='right' maxWidth={'30rem'} width={'100%'} minWidth={'none'}>
      <Modal.Header className='flex justify-between w-full items-center'>
        <Modal.Title title={'Hola'} />
        <Modal.Cerrar />
      </Modal.Header>
      <Box
        className={classNames('overflow-auto p-4 flex flex-col gap-4')}
        style={{
          scrollbarWidth: 'none',
        }}
      >
        {data?.length &&
          data.map(mov => (
            <MonthsMovements
              isLoading={isLoading}
              onClick={() => handleAction(mov)}
              key={mov}
              text={mov}
              loadingSelected={false}
            />
          ))}
      </Box>
    </Modal>
  )
}

export default ModalDonwnloadStatement
