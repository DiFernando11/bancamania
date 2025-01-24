'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useAuthStoreLs } from '@/application/zustand/stores'
import { clientRoutes } from '@/routes/clientRoutes'
import { HasValidCode, HasValidCodeType } from '@/shared/types'
import { addMinutesToDate } from '@/shared/utils'
import {
  ExpiredTimeCodePhone,
  ForwarTimeCode,
} from '@/shared/utils/globalConstants'
import { useCounter } from '../useCounter'

export const useForwardCode = ({
  restHasValidCode,
  type,
}: {
  restHasValidCode: Partial<HasValidCode>
  type: HasValidCodeType
}) => {
  const router = useRouter()
  const { handleGetCurrentTime, handleSetTime, handleReset, timerRef } =
    useCounter()
  const { flushHasValidCode, hasValidCode, setHasValidCode } = useAuthStoreLs()
  const [isStartCount, setIsStartCount] = useState<boolean>(false)

  const isSuccessForward = hasValidCode?.isSuccessForward ?? false
  const expireAt = hasValidCode?.expireAt as Date

  const [disabled, setDisabled] = useState<boolean>(isSuccessForward)

  const handleEndTime = () => {
    setDisabled(true)
    setHasValidCode({
      ...restHasValidCode,
      expireAt,
      isSuccessForward: true,
      lasTimeForwardCode: 0,
      type,
    })
  }

  const onSuccess = () => {
    handleReset()
    setDisabled(false)
    setHasValidCode({
      ...restHasValidCode,
      expireAt: addMinutesToDate({ minutes: ExpiredTimeCodePhone }),
      isSuccessForward: false,
      lasTimeForwardCode: ForwarTimeCode,
      type,
    })
  }

  const handleSaveCurrentTime = () => {
    if (type === hasValidCode?.type) {
      const timeCurrent = handleGetCurrentTime()
      setHasValidCode({
        ...restHasValidCode,
        expireAt,
        isSuccessForward: timeCurrent === 0,
        lasTimeForwardCode: timeCurrent,
        type,
      })
    }
  }

  useEffect(() => {
    window.addEventListener('beforeunload', handleSaveCurrentTime)
    if (!hasValidCode?.expireAt || hasValidCode?.type !== type) {
      return router.push(clientRoutes.login.path)
    }
    const isExpired = new Date() > hasValidCode.expireAt
    if (isExpired && hasValidCode?.type === type) {
      flushHasValidCode()

      return router.push(clientRoutes.login.path)
    } else {
      setIsStartCount(true)
    }

    return () => {
      window.removeEventListener('beforeunload', handleSaveCurrentTime)
    }
  }, [])

  useEffect(() => {
    if (isStartCount) {
      handleSetTime(hasValidCode?.lasTimeForwardCode ?? 60)
    }
  }, [isStartCount])

  return { disabled, handleEndTime, isStartCount, onSuccess, timerRef }
}
