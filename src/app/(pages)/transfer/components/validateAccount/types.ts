import {
  SendServiceTypes,
  VerifyAccountRequest,
  VerifyAccountResponse,
} from '@/shared'

export type ValidateAccountProps = SendServiceTypes<
  VerifyAccountResponse,
  VerifyAccountRequest
>
