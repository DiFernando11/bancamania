import classNames from 'classnames'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import { Box } from '@/ui/atoms'
import { Modal } from '@/ui/molecules'
import { CardProduct } from '@/ui/organisms'

const ModalYourCards = () => {
  const t = useI18Text('tarjetas')

  return (
    <Modal position='right' maxWidth={'30rem'} width={'100%'}>
      <Modal.Header className='flex justify-between w-full items-center'>
        <Modal.Title title={t('selectCard')} />
        <Modal.Cerrar />
      </Modal.Header>
      <Box
        className={classNames('overflow-auto p-4')}
        style={{
          scrollbarWidth: 'none',
        }}
      >
        <CardProduct.BankingCard
          className='bg-debit h-48 cursor-pointer'
          headerBankCard={<CardProduct.HeaderMasterCard />}
          textAccount={'1212121'}
          isLoading
        />
      </Box>
    </Modal>
  )
}

export default ModalYourCards
