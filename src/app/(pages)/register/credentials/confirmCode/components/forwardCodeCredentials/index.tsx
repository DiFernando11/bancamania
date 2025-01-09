import React from 'react'
import { useSendCodeCredentialsSaveMail } from '@/application/useCases'
import { useAuthStoreLs } from '@/application/zustand/stores'
import ForwardCode from '@/shared/components/ForwardCode'
import { Box } from '@/ui/atoms'

const ForwardCodeCredentials = () => {
  const { hasValidCode } = useAuthStoreLs()
  const { handleActionService } = useSendCodeCredentialsSaveMail()
  const email = hasValidCode?.mail ?? ''

  const handleAction = (onSuccess: () => void) => {
    handleActionService({ email }, { onSuccess })
  }

  return (
    <Box>
      <ForwardCode
        handleAction={handleAction}
        type='registerCredentials'
        restHasValidCode={{
          firstName: hasValidCode?.firstName,
          lastName: hasValidCode?.lastName,
          mail: hasValidCode?.mail,
        }}
      />
    </Box>
  )
}

export default ForwardCodeCredentials
