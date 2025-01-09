'use client'
import { useRouter } from 'next/navigation'
import { useSendCodePhone } from '@/application/hooks'
import { useAuthStoreLs } from '@/application/zustand/stores'
import { clientRoutes } from '@/routes/clientRoutes'
import { PhoneType, SendCodePhoneResponse, SendServiceTypes } from '@/shared'
import { addMinutesToDate } from '@/shared/utils'
import {
  ExpiredTimeCodePhone,
  ForwarTimeCode,
} from '@/shared/utils/globalConstants'

export const useSendCodeSavePhone = (): SendServiceTypes<
  SendCodePhoneResponse,
  PhoneType
> => {
  const router = useRouter()
  const { isLoading, isError, isSuccess, handleActionService } =
    useSendCodePhone()
  const { setHasValidCode } = useAuthStoreLs()

  return {
    handleActionService: ({ phone }) => {
      handleActionService(
        { phone },
        {
          onSuccess: () => {
            setHasValidCode({
              expireAt: addMinutesToDate({ minutes: ExpiredTimeCodePhone }),
              isSuccessForward: false,
              lasTimeForwardCode: ForwarTimeCode,
              phone,
              type: 'registerPhone',
            })
            router.push(clientRoutes.loginValidateCode.path)
          },
        }
      )
    },
    isError,
    isLoading,
    isSuccess,
  }
}
