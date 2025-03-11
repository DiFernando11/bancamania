import React from 'react'
import ModalMothMovements from '@/app/components/modalMonthsMovements'
import ModalYourCards from '@/app/components/modalYourCards'
import { useI18Text } from '@/application/hooks'
import { clientRoutes } from '@/routes/clientRoutes'
import { useModal, useNavigation } from '@/shared/hooks'
import { Box } from '@/ui/atoms'
import ButtonsActions from './buttonActions'

const Actions = ({
  accountId,
  isLoading,
}: {
  accountId?: string | number
  isLoading: boolean
}) => {
  const t = useI18Text('account')
  const router = useNavigation()

  const { openModal } = useModal()

  return (
    <Box className='grid grid-cols-3 gap-4'>
      <ButtonsActions
        isLoading={isLoading}
        text={t('transfer')}
        iconName='Transfers'
        onClick={() => router.push(clientRoutes.transfer.path)}
      />
      <ButtonsActions
        isLoading={isLoading}
        iconClass='w-9 h-9 sm:w-12 sm:h-12'
        text={t('payCard')}
        iconName='PaySvg'
        onClick={() => openModal(<ModalYourCards />)}
      />
      <ButtonsActions
        isLoading={isLoading}
        iconClass='w-9 h-9 sm:w-11 sm:h-11 sm:mt-1'
        text={t('statement')}
        iconName='Statement'
        onClick={() => {
          openModal(
            <ModalMothMovements
              id={accountId}
              idType='accountId'
              title={t('statement')}
            />
          )
        }}
      />
    </Box>
  )
}

export default Actions
