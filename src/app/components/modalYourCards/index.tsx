import classNames from 'classnames'
import React from 'react'
import {
  useGetCardDebit,
  useGetCardsCredit,
  useI18Text,
} from '@/application/hooks'
import { Box } from '@/ui/atoms'
import { Modal } from '@/ui/molecules'
import { CardProduct } from '@/ui/organisms'

const ModalYourCards = ({
  onClick,
  showDebit = true,
}: {
  onClick?: (id?: string) => void
  showDebit?: boolean
}) => {
  const t = useI18Text('tarjetas')
  const { data, isLoading } = useGetCardDebit(showDebit)
  const { data: dataCredit, isLoading: isLoadingCredit } = useGetCardsCredit()

  return (
    <Modal position='right' maxWidth={'30rem'} width={'100%'}>
      <Modal.Header className='flex justify-between w-full items-center'>
        <Modal.Title title={t('selectCard')} />
        <Modal.Cerrar />
      </Modal.Header>
      <Box
        className={classNames('flex flex-col overflow-auto p-4 gap-4')}
        style={{
          scrollbarWidth: 'none',
        }}
      >
        {showDebit && (
          <CardProduct.BankingCard
            className='bg-debit !h-48 !min-h-48 cursor-pointer'
            headerBankCard={<CardProduct.HeaderMasterCard />}
            textAccount={data?.cardNumber}
            isLoading={isLoading}
            onClick={() => onClick && onClick(data?.id)}
          />
        )}
        {dataCredit?.map(({ id, cardNumber }) => (
          <CardProduct.BankingCard
            key={id}
            className='bg-debit !h-48 !min-h-48 cursor-pointer'
            headerBankCard={<CardProduct.HeaderMasterCard />}
            textAccount={cardNumber}
            onClick={() => onClick && onClick(id)}
            isLoading={isLoadingCredit}
          />
        ))}
      </Box>
    </Modal>
  )
}

export default ModalYourCards
