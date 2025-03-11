'use-client'
import { useSendCodeCredentialsRegister } from '@/application/hooks'
import { useAuthStoreLs } from '@/application/zustand/stores'
import { clientRoutes } from '@/routes/clientRoutes'
import { Email, SendCodeCredentialsResponse, SendServiceTypes } from '@/shared'
import { useNavigation } from '@/shared/hooks'
import { addMinutesToDate } from '@/shared/utils'
import {
  ExpiredTimeCodePhone,
  ForwarTimeCode,
} from '@/shared/utils/globalConstants'

export const useSendCodeCredentialsSaveMail = (): SendServiceTypes<
  SendCodeCredentialsResponse,
  Email
> => {
  const router = useNavigation()
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
          router.push(clientRoutes.login.path)
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
          router.push(clientRoutes.registerCredentialsConfirmCode.path)
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
