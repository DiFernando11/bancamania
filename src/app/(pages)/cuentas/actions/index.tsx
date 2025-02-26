import { useRouter } from 'next/navigation'
import React from 'react'
import ModalYourCards from '@/app/components/modalYourCards'
import { useGetMonthMovements, useI18Text } from '@/application/hooks'
import { clientRoutes } from '@/routes/clientRoutes'
import { useModal } from '@/shared/hooks'
import { Box } from '@/ui/atoms'
import ButtonsActions from './buttonActions'
import ModalMonthsMovements from '../modalMonthsMovements'

const Actions = () => {
  const t = useI18Text('account')
  const router = useRouter()

  const { openModal } = useModal()

  return (
    <Box className='grid grid-cols-3 gap-4'>
      <ButtonsActions
        text={t('transfer')}
        iconName='Transfers'
        onClick={() => router.push(clientRoutes.transfer.path)}
      />
      <ButtonsActions
        iconClass='w-9 h-9 sm:w-12 sm:h-12'
        text={t('payCard')}
        iconName='PaySvg'
        onClick={() => openModal(<ModalYourCards />)}
      />
      <ButtonsActions
        iconClass='w-9 h-9 sm:w-11 sm:h-11 sm:mt-1'
        text={t('statement')}
        iconName='Statement'
        onClick={() => {
          openModal(<ModalMonthsMovements />)
        }}
      />
    </Box>
  )
}

export default Actions
