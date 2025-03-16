import React from 'react'
import { useGetCardsCredit } from '@/application/hooks/cards/useGetCardsCredit'

const YourCardsCredit = () => {
  const { data } = useGetCardsCredit()
  console.log(data)

  return <div>YourCardsCredit</div>
}

export default YourCardsCredit
