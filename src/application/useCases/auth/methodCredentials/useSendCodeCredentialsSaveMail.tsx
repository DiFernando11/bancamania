'use-client'
import { useRouter } from 'next/navigation'
import { useSendCodeCredentialsRegister } from '@/application/hooks'
import { useAuthStoreLs } from '@/application/zustand/stores'
import { clientRoutes } from '@/routes/clientRoutes'
import { Email, SendCodeCredentialsResponse, SendServiceTypes } from '@/shared'
import { addMinutesToDate } from '@/shared/utils'
import {
  ExpiredTimeCodePhone,
  ForwarTimeCode,
} from '@/shared/utils/globalConstants'

export const useSendCodeCredentialsSaveMail = (): SendServiceTypes<
  SendCodeCredentialsResponse,
  Email
> => {
  const router = useRouter()
  const {
    handleActionService: sendCode,
    isError,
    isLoading,
    isSuccess,
  } = useSendCodeCredentialsRegister()
  const { setHasValidCode } = useAuthStoreLs()

  const handleSubmit = ({ email }: Required<Email>) => {
    sendCode(
      { email },
      {
        onError: () => {
          router.push(clientRoutes.login)
        },
        onSuccess: async data => {
          setHasValidCode({
            expireAt: addMinutesToDate({ minutes: ExpiredTimeCodePhone }),
            firstName: data?.firstName,
            isSuccessForward: false,
            lasTimeForwardCode: ForwarTimeCode,
            lastName: data?.lastName,
            mail: email,
            type: 'registerCredentials',
          })
          router.push(clientRoutes.registerCredentialsConfirmCode)
        },
      }
    )
  }

  return {
    handleActionService: handleSubmit,
    isError,
    isLoading,
    isSuccess,
  }
}
