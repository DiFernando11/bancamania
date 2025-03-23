import classNames from 'classnames'
import React from 'react'
import {
  useGetCardDebit,
  useGetCardsCredit,
  useI18Text,
} from '@/application/hooks'
import { TYPE_CARD } from '@/shared'
import { Box } from '@/ui/atoms'
import { Modal } from '@/ui/molecules'
import {
  AlertErrorService,
  CardCredit,
  CardDebit,
  SkeletonCards,
  SkeletonLoader,
} from '@/ui/organisms'
import { PurchaseSelectedCard } from '../typeCardSelected/types'

const ModalYourCards = ({
  onClick,
  showDebit = true,
}: {
  onClick?: (selectedCard: PurchaseSelectedCard) => void
  showDebit?: boolean
}) => {
  const t = useI18Text('tarjetas')
  const { data, isLoading, isError } = useGetCardDebit(showDebit)
  const {
    data: dataCredit,
    isLoading: isLoadingCredit,
    isError: isErrorCredit,
  } = useGetCardsCredit()

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
          <SkeletonLoader
            classNameSkeleton='h-48 w-full rounded-lg'
            isLoading={isLoading}
          >
            <AlertErrorService
              isError={isError}
              error={{ message: t('cardDebitError') }}
            />
            {!isError && (
              <CardDebit
                className='bg-debit !h-48 !min-h-48 cursor-pointer'
                textAccount={data?.cardNumber}
                isLoading={isLoading}
                onClick={() =>
                  onClick &&
                  onClick({
                    cardNumber: data?.cardNumber as string,
                    id: data?.id as string,
                    typeCard: TYPE_CARD.DEBIT,
                  })
                }
              />
            )}
          </SkeletonLoader>
        )}
        {isLoadingCredit ? (
          <SkeletonCards />
        ) : (
          dataCredit?.map(({ id, cardNumber, marca, version }) => (
            <CardCredit
              key={id}
              className='bg-debit !h-48 !min-h-48 cursor-pointer'
              textAccount={cardNumber}
              onClick={() =>
                onClick &&
                onClick({
                  cardNumber,
                  id,
                  marca,
                  typeCard: TYPE_CARD.CREDIT,
                  version,
                })
              }
              isLoading={isLoadingCredit}
              version={version}
              brand={marca}
            />
          ))
        )}
        <AlertErrorService
          isError={isErrorCredit}
          error={{ message: t('cardCreditsError') }}
        />
      </Box>
    </Modal>
  )
}

export default ModalYourCards
