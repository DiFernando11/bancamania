'use client'
import classNames from 'classnames'
import React, { useState } from 'react'
import { useDownloadStatement, useGetMonthMovements } from '@/application/hooks'
import { Box } from '@/ui/atoms'
import { Modal } from '@/ui/molecules'
import MonthsMovements from './monthsMovements'
import { ModalMovementsProps } from './types'

const ModalMothMovements = ({ title, idType, id }: ModalMovementsProps) => {
  const { data, isLoading } = useGetMonthMovements({ [idType]: id })
  const { handleActionService, isLoading: loadingStatement } =
    useDownloadStatement()

  const [selectId, setSelectId] = useState<string | null>(null)

  const handleAction = (fechaDesde: string) => {
    setSelectId(fechaDesde)
    if (!isLoading) {
      handleActionService({ fechaDesde })
    }
  }

  return (
    <Modal position='right' maxWidth={'30rem'} width={'100%'} minWidth={'none'}>
      <Modal.Header className='flex justify-between w-full items-center'>
        <Modal.Title title={title} />
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
              onClick={() => handleAction(mov.id)}
              key={mov.id}
              text={mov.text}
              loadingSelected={loadingStatement && selectId === mov.id}
            />
          ))}
      </Box>
    </Modal>
  )
}

export default ModalMothMovements
