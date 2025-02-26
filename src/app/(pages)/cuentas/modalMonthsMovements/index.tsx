import { useQueryClient } from '@tanstack/react-query'
import classNames from 'classnames'
import React from 'react'
import { useGetMonthMovements } from '@/application/hooks'
import { GetMovementsResponse } from '@/shared'
import { Box } from '@/ui/atoms'
import { Modal } from '@/ui/molecules'
import { SelectedOption } from '@/ui/organisms'

const ModalMonthsMovements = () => {
  const { data, isLoading } = useGetMonthMovements()

  return (
    <Modal position='right' maxWidth={'30rem'} width={'100%'} minWidth={'none'}>
      <Modal.Header className='flex justify-between w-full items-center'>
        <Modal.Title title={'Estados de cuenta'} />
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
            <SelectedOption
              onClick={() => console.log('first')}
              key={mov.id}
              text={mov.text}
              isLoading={isLoading}
            />
          ))}
      </Box>
    </Modal>
  )
}

export default ModalMonthsMovements
