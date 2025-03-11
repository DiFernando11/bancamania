'use client'
import { useSendCodePhone } from '@/application/hooks'
import { useAuthStoreLs } from '@/application/zustand/stores'
import { clientRoutes } from '@/routes/clientRoutes'
import { PhoneType, SendCodePhoneResponse, SendServiceTypes } from '@/shared'
import { useNavigation } from '@/shared/hooks'
import { addMinutesToDate } from '@/shared/utils'
import {
  ExpiredTimeCodePhone,
  ForwarTimeCode,
} from '@/shared/utils/globalConstants'

export const useSendCodeSavePhone = (): SendServiceTypes<
  SendCodePhoneResponse,
  PhoneType
> => {
  const router = useNavigation()
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
