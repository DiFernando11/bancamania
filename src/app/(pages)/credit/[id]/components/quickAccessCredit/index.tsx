import React from 'react'
import { Text } from '@/ui/atoms'
import { ButtonQuickAccess } from '@/ui/molecules'
import GaleryCards from '@/ui/organisms/galeryCards'

const QuickAccessCredit = ({
  text,
  onClick,
}: {
  text: string
  onClick: () => void
}) => {
  return (
    <GaleryCards.Card minWidth='10rem' className='!border-none !p-0'>
      <ButtonQuickAccess
        onClick={onClick}
        className='flex-col cursor-pointer !py-4'
      >
        <Text className='text-center'>{text}</Text>
      </ButtonQuickAccess>
    </GaleryCards.Card>
  )
}

export default QuickAccessCredit
