'use client'
import { signIn } from 'next-auth/react'
import React from 'react'
import VerificationInput from 'react-verification-input'
import { useLoginPhoneCase } from '@/application/useCases'
import { useAuthStoreLs } from '@/application/zustand/stores'
import PhoneForwardCode from './components/PhoneForwardCode'

const ValidateCodePhonePage: React.FC = () => {
  const { hasValidCode } = useAuthStoreLs()

  const { handleSubmit, isVerifyGoogle, codeCurrent, setCodeCurrent } =
    useLoginPhoneCase()

  const handleRegisterPhone = () => {
    signIn('google', {
      callbackUrl: `${window.location.origin}/login/verifyGoogle?flow=phone`,
    })
  }

  const handleChange = (value: string) => {
    setCodeCurrent(value)
    if (value.length === 6) {
      handleSubmit({
        codeCurrent: value,
        phone: hasValidCode?.phone as string,
      })
    }
  }

  return (
    <div className='flex flex-col gap-10 justify-center items-center'>
      <h1 className='text-center text-3xl'>Validar codigo</h1>
      <div className='flex flex-col gap-10 items-center space-x-2'>
        <VerificationInput value={codeCurrent} onChange={handleChange} />
        <div>
          <PhoneForwardCode />
          {isVerifyGoogle && (
            <button
              className='border border-gray-300 rounded-lg shadow-sm py-2 px-5'
              onClick={handleRegisterPhone}
            >
              Verificar con google
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ValidateCodePhonePage
