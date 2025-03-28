'use client'
import React from 'react'
import { useI18Text } from '@/application/hooks'
import GaleryCards from '@/ui/organisms/galeryCards'
import QuickAccessCredit from '../quickAccessCredit'

const ActionsCredit = () => {
  const t = useI18Text('tarjetas')
  const tMov = useI18Text('movements')

  const actions = [
    { id: 1, onClick: () => console.log('1'), text: t('courtStatus') },
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
    { id: 3, onClick: () => console.log('3'), text: t('cardPay') },
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
