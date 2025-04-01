'use client'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import { clientRoutes } from '@/routes/clientRoutes'
import { useModal, useNavigation } from '@/shared/hooks'
import { replaceDynamicsRoutes } from '@/shared/utils'
import GaleryCards from '@/ui/organisms/galeryCards'
import QuickAccessCredit from '../quickAccessCredit'
import ModalDonwnloadStatement from './modalDonwloadStatement'

const ActionsCredit = ({ id }: { id: string }) => {
  const t = useI18Text('tarjetas')
  const tMov = useI18Text('movements')
  const router = useNavigation()
  const { openModal } = useModal()

  const actions = [
    {
      id: 1,
      onClick: () => openModal(<ModalDonwnloadStatement id={id} />),
      text: t('courtStatus'),
    },
    {
      id: 2,
      onClick: () => {
        const section = document.getElementById('movementCredit')
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' })
        }
      },
      text: tMov('titleCard'),
    },
    {
      id: 3,
      onClick: () =>
        router.push(
          replaceDynamicsRoutes(clientRoutes.purchaseCredit.path, { id })
        ),
      text: t('cardPay'),
    },
  ]

  return (
    <GaleryCards className='flex gap-4'>
      {actions.map(act => (
        <QuickAccessCredit key={act.id} text={act.text} onClick={act.onClick} />
      ))}
    </GaleryCards>
  )
}

export default ActionsCredit
