import React from 'react'
import { OpenCloseEye } from '@/ui/molecules'

const ShowBalance = ({
  isShow,
  setIsShow,
}: {
  isShow: boolean
  setIsShow: (isShow: boolean) => void
}) => {
  return (
    <OpenCloseEye
      className='flex justify-end items-center'
      setIsShow={setIsShow}
      isShow={isShow}
      iconClass={'w-8 h-8'}
    />
  )
}

export default ShowBalance
